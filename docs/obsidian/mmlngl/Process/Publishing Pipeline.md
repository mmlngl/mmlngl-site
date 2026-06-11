
**1. Write the Article**

We need content first. Draft it using the 3-act structure. Long-form.
There's a skill for that 😉

Include:
- Headline
- Content Body
- Tag hints
- Keyword hints

**2. QA**

- Free from typos?
- on-brand?
- in-campaign?

**3. Reformat**

Hint: Each one is a skill…

Generate media:
- Image
- Audio
- Slides
- Video
- TikTok/YT Short

Generate Metadata:
- Description (not a Tweet)
- Keywords

Reformat/Compress
- Tweet length
- LinkedIn length

Translate
- Italian
- Thai

**4. Publish**

Written (full-length):
- Lensed Build/mmlngl
- Medium
- Substack

Written (short):
- LinkedIn

Written (tweet):
- X



---

# Dagu Pipeline


```yaml
name: publish-article
description: Spreads the word
queue: publish-article

params:
  - name: ARTICLE
    type: string
    required: true
    description: Path to the mdx article

artifacts:
  enabled: true
  dir: ./articles

steps:
  - id: qa
    action: dag.run
    with:
      dag: qa-sub
      params: "TYPE=daily"

  - id: reformat
    action: dag.run
    with:
      dag: reformat-sub
      params: "TYPE=daily"

  - id: publish
    action: dag.run
    with:
      dag: publish-sub
      params: "TYPE=daily"

---
name: qa-sub
params:
  - TYPE: "batch"
steps:
  - id: length
    description: Enough substance to make the idea worthwhile
    run: echo "Extracting ${TYPE} data"

  - id: tension
    description: Enough of a gap between expectation
    run: echo "Transforming data"
    depends: extract

---
name: reformat-sub
params:
  - TYPE: "batch"
steps:
  - id: extract
    run: echo "Extracting ${TYPE} data"

  - id: transform
    run: echo "Transforming data"
    depends: extract

---
name: reformat-sub
params:
  - TYPE: "batch"
steps:
  - id: extract
    run: echo "Extracting ${TYPE} data"

  - id: transform
    run: echo "Transforming data"
    depends: extract

---
name: reformat-sub
params:
  - TYPE: "batch"
steps:
  - id: extract
    run: echo "Extracting ${TYPE} data"

  - id: transform
    run: echo "Transforming data"
    depends: extract

```

# Approach

- Dagu Cron checks a queue
- Any posts need publishing?
- Publish