#!/usr/bin/env python3
"""按全站语料子集化 Noto Serif SC 中文字体。

正文内容变更后（新增章节/书籍）在 site/ 目录重跑本脚本，重新生成
.vitepress/theme/fonts/noto-serif-sc-subset-{400,600,700}.woff2。

依赖：pip install fonttools brotli；字体源来自 @fontsource/noto-serif-sc（pnpm install 后就位）。
"""
import glob
import os
import subprocess
import sys
import tempfile

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(SITE)

chars = set()
for pat in ["books/**/*.md", "index.md", ".vitepress/**/*.ts", ".vitepress/**/*.mts"]:
    for p in glob.glob(pat, recursive=True):
        if "node_modules" in p or "dist" in p or "cache" in p:
            continue
        chars.update(open(p, encoding="utf-8", errors="ignore").read())
chars.update(chr(c) for c in range(0x20, 0x7F))  # ASCII 可打印
chars.update("“”‘’…—·《》〈〉「」『』（）【】、。，；：？！￥±×÷℃　")
chars = {c for c in chars if ord(c) >= 0x20}
print(f"语料字符数: {len(chars)}")

with tempfile.NamedTemporaryFile("w", suffix=".txt", delete=False) as f:
    f.write(",".join(f"U+{ord(c):04X}" for c in sorted(chars)))
    unicodes_file = f.name

src_t = "node_modules/@fontsource/noto-serif-sc/files/noto-serif-sc-chinese-simplified-{w}-normal.woff2"
out_t = ".vitepress/theme/fonts/noto-serif-sc-subset-{w}.woff2"
for w in (400, 600, 700):
    src, out = src_t.format(w=w), out_t.format(w=w)
    if not os.path.exists(src):
        sys.exit(f"缺少字体源 {src}，先执行 pnpm install")
    subprocess.run(
        ["python3", "-m", "fontTools.subset", src,
         f"--unicodes-file={unicodes_file}", "--flavor=woff2",
         f"--output-file={out}", "--layout-features=*", "--drop-tables+=DSIG"],
        check=True,
    )
    print(f"{w}: {os.path.getsize(src) // 1024}KB -> {os.path.getsize(out) // 1024}KB")
os.unlink(unicodes_file)
