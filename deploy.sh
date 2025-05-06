#!/bin/bash

SOURCE_DIR="./articles"
OUTPUT_DIR="./pages"
TEMPLATE="./artikel.html"

if [ ! -f "$TEMPLATE" ]; then
    echo "Template $TEMPLATE nicht gefunden!"
    exit 1
fi

mkdir -p "$OUTPUT_DIR"

for md_file in "$SOURCE_DIR"/*.md; do
    title=$(grep -m 1 '^title:' "$md_file" | sed 's/title: "\(.*\)"/\1/')

    if [ -z "$title" ]; then
        title=$(basename "$md_file" .md)
    fi

    title=$(echo "$title" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

    sanitized_title=$(echo "$title" | tr -s '[:space:]' '-' | sed 's/-$//')

    output_file="$OUTPUT_DIR/${sanitized_title}.html"

    echo "Konvertiere $md_file -> $output_file"

    sed 's/!\[\([^]]*\)\](\([^)]*\))/<img src="\2" alt="\1">/g' "$md_file" > "${md_file}.nofig.md"

    content=$(pandoc "${md_file}.nofig.md" --mathjax)

    sed "/{{content}}/{
        s/{{content}}//g
        r /dev/stdin
    }" "$TEMPLATE" <<< "$content" > "$output_file"

    rm "${md_file}.nofig.md"
done