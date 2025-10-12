# Lesson Json Format

## Lesson

```json
{
  "steps": [
    ...
  ]
}
```

## Step

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
  "text": "CONTENT"
}
```

## Text component

```json
{
  "type": "text",
  "text": "CONTENT"
}
```

## Code component

```json
{
  "type": "code",
  "code": "lines\nof\ncode",
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

