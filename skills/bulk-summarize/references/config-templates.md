# Config Templates

Ready-to-use configuration templates for common research scenarios.

## Podcast Research

Ideal for researching topics through podcast interviews and discussions. Use YouTube URLs for video podcasts or RSS feed URLs for audio-only podcasts.

```json
{
  "name": "Podcast Research",
  "description": "Research topic X through podcast content",
  "keywords": ["KEYWORD1", "KEYWORD2"],
  "sources": [
    {
      "id": "podcast-youtube",
      "name": "Podcast Name (YouTube)",
      "url": "https://www.youtube.com/@PodcastChannel",
      "type": "channel",
      "enabled": true,
      "tags": ["youtube", "podcast"]
    },
    {
      "id": "podcast-rss",
      "name": "Podcast Name (RSS)",
      "url": "https://feeds.example.com/podcast",
      "type": "channel",
      "enabled": true,
      "tags": ["rss", "podcast"]
    }
  ],
  "settings": {
    "maxVideosPerSource": 50,
    "summaryLength": "xxl",
    "summaryPrompt": "Create detailed notes from this podcast episode. Extract: key insights, notable quotes, resources mentioned, actionable advice. Ignore: sponsors, ads, promotional content.\n\nTitle: {title}",
    "outputDir": "podcast-notes"
  }
}
```

**Finding RSS feeds:** For Apple Podcasts, use WebFetch on the podcast page to find the RSS feed URL in the metadata.

## Conference Talks

Perfect for digesting conference presentations and tech talks.

```json
{
  "name": "Conference Digest",
  "description": "Digest of conference talks from EVENT",
  "keywords": [],
  "sources": [
    {
      "id": "conf-name",
      "name": "Conference Name 2024",
      "url": "https://www.youtube.com/playlist?list=PLxxxxxx",
      "type": "playlist",
      "enabled": true,
      "tags": ["conference", "tech"]
    }
  ],
  "settings": {
    "maxVideosPerSource": 100,
    "summaryLength": "long",
    "summaryPrompt": "Summarize this conference talk. Include: main thesis, key takeaways, new APIs or features, code patterns shown, speaker recommendations.\n\nTitle: {title}",
    "outputDir": "conf-notes"
  }
}
```

## Tutorial/Learning

For structured learning from educational content.

```json
{
  "name": "Learning TOPIC",
  "description": "Study notes for learning TOPIC",
  "keywords": ["concept1", "concept2", "tutorial", "guide"],
  "sources": [
    {
      "id": "tutorial-channel",
      "name": "Tutorial Channel",
      "url": "https://www.youtube.com/@TutorialChannel",
      "type": "channel",
      "enabled": true,
      "tags": ["tutorial", "learning"]
    }
  ],
  "settings": {
    "maxVideosPerSource": 30,
    "summaryLength": "xl",
    "summaryPrompt": "Create study notes from this tutorial. Include: concepts explained, code examples with syntax, prerequisites mentioned, common pitfalls warned about, practice suggestions.\n\nTitle: {title}",
    "outputDir": "study-notes"
  }
}
```

## Travel/Location Research

For researching destinations, cities, or regions through travel content.

```json
{
  "name": "LOCATION Research",
  "description": "Research for potential move/visit to LOCATION",
  "keywords": ["city", "neighborhood", "cost of living", "expat", "moving"],
  "sources": [
    {
      "id": "expat-channel-1",
      "name": "Expat Channel",
      "url": "https://www.youtube.com/@ExpatChannel",
      "type": "channel",
      "enabled": true,
      "tags": ["expat", "lifestyle"]
    },
    {
      "id": "travel-channel-1",
      "name": "Travel Vlogger",
      "url": "https://www.youtube.com/@TravelChannel",
      "type": "channel",
      "enabled": true,
      "tags": ["travel", "vlog"]
    }
  ],
  "settings": {
    "maxVideosPerSource": 40,
    "summaryLength": "xl",
    "summaryPrompt": "Extract practical information about this location. Include: neighborhood recommendations, cost estimates (rent, food, transport), cultural tips, activities and attractions, accommodation advice, transportation options, food recommendations, safety notes. Ignore: ads, sponsors, dated news, personal opinions.\n\nTitle: {title}",
    "outputDir": "travel-research"
  }
}
```

## Product/Tool Reviews

For researching products, tools, or services through comparison videos.

```json
{
  "name": "PRODUCT Research",
  "description": "Research reviews and comparisons for PRODUCT category",
  "keywords": ["review", "comparison", "vs", "best", "top", "2024"],
  "sources": [
    {
      "id": "tech-reviewer-1",
      "name": "Tech Review Channel",
      "url": "https://www.youtube.com/@TechChannel",
      "type": "channel",
      "enabled": true,
      "tags": ["reviews", "tech"]
    }
  ],
  "settings": {
    "maxVideosPerSource": 25,
    "summaryLength": "long",
    "summaryPrompt": "Extract product review information. Include: products compared, pros and cons of each, pricing mentioned, ideal use cases, reviewer's final recommendation. Focus on factual comparisons over opinions.\n\nTitle: {title}",
    "outputDir": "tool-reviews"
  }
}
```

## News/Industry Updates

For tracking industry news and developments.

```json
{
  "name": "INDUSTRY News",
  "description": "Weekly digest of INDUSTRY developments",
  "keywords": ["news", "update", "announcement", "released", "launched"],
  "sources": [
    {
      "id": "news-channel",
      "name": "Industry News Channel",
      "url": "https://www.youtube.com/@NewsChannel",
      "type": "channel",
      "enabled": true,
      "tags": ["news"]
    }
  ],
  "settings": {
    "maxVideosPerSource": 20,
    "summaryLength": "medium",
    "summaryPrompt": "Summarize the news and developments discussed. Include: key announcements, companies/products mentioned, implications, dates if mentioned. Note: content may be time-sensitive.\n\nTitle: {title}",
    "outputDir": "industry-news"
  }
}
```

## Multi-Source Research

Template for combining multiple channels on a single topic.

```json
{
  "name": "TOPIC Deep Dive",
  "description": "Comprehensive research on TOPIC from multiple perspectives",
  "keywords": ["TOPIC", "related-term-1", "related-term-2"],
  "sources": [
    {
      "id": "expert-1",
      "name": "Expert Channel 1",
      "url": "https://www.youtube.com/@Expert1",
      "type": "channel",
      "enabled": true,
      "tags": ["expert", "primary"]
    },
    {
      "id": "expert-2",
      "name": "Expert Channel 2",
      "url": "https://www.youtube.com/@Expert2",
      "type": "channel",
      "enabled": true,
      "tags": ["expert", "primary"]
    },
    {
      "id": "podcast-1",
      "name": "Related Podcast",
      "url": "https://www.youtube.com/@Podcast1",
      "type": "channel",
      "enabled": true,
      "tags": ["podcast", "secondary"]
    }
  ],
  "settings": {
    "maxVideosPerSource": 30,
    "summaryLength": "xl",
    "summaryPrompt": "Create comprehensive notes on TOPIC. Include: key concepts explained, expert opinions, practical applications, resources for further learning.\n\nTitle: {title}\nSource: {source}",
    "outputDir": "topic-research"
  }
}
```
