# Lesson Json Format

## Root lesson

```json
{
  "type": "info|code|challenge",
  "components": [
    ...
  ]
}
```

## Title component

```json
{
  "type": "title",
  "content": "CONTENT"
}
```

## Text component

```json
{
  "type": "text",
  "content": "CONTENT"
}
```

## Code component

```json
{
  "type": "code",
  "content": "lines\nof\ncode",
  "added": [
    1,
    2
  ],
  "removed": [
    3
  ],
  "lang": "javascript",
  "allowCopy": false
}
```

## Image component

```json
{
  "type": "image",
  "url": "https://example.com"
}
```

## Hint component

```json
{
  "type": "hint",
  "components": [...]
}
```

