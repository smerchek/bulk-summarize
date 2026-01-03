# Platform Guide

Detailed instructions for each supported platform.

## YouTube

The most seamless experience - YouTube videos often have transcripts built in.

### URL Formats

| Type | Format | Example |
|------|--------|---------|
| Channel | `youtube.com/@username` | `https://www.youtube.com/@lexfridman` |
| Channel (legacy) | `youtube.com/c/name` | `https://www.youtube.com/c/Fireship` |
| Channel (ID) | `youtube.com/channel/UCID` | `https://www.youtube.com/channel/UCxxxxxx` |
| Playlist | `youtube.com/playlist?list=PLID` | `https://www.youtube.com/playlist?list=PLxxxxxx` |
| Single video | `youtube.com/watch?v=ID` | `https://www.youtube.com/watch?v=dQw4w9WgXcQ` |

### Finding Content

```bash
# Search for channels by topic
yt-dlp "ytsearch10:machine learning podcast" --flat-playlist \
  --print "%(channel_url)s %(channel)s" 2>/dev/null | sort -u

# List playlists on a channel
yt-dlp --flat-playlist --print "%(title)s: %(url)s" \
  "https://www.youtube.com/@ChannelName/playlists"

# Preview video titles with filtering
yt-dlp --flat-playlist --print "%(title)s" \
  "https://www.youtube.com/@ChannelName/videos" | grep -i "react"

# Get video count
yt-dlp --flat-playlist --print "%(title)s" \
  "https://www.youtube.com/@ChannelName/videos" | wc -l
```

### Config Example

```json
{
  "id": "fireship",
  "name": "Fireship",
  "url": "https://www.youtube.com/@Fireship",
  "type": "channel",
  "enabled": true,
  "tags": ["tech", "tutorials", "short"]
}
```

## Podcast RSS Feeds

RSS feeds are the most reliable way to access podcast content. They work directly with yt-dlp.

### Finding RSS Feed URLs

**From Apple Podcasts:**
1. Get the Apple Podcasts URL (e.g., `https://podcasts.apple.com/us/podcast/huberman-lab/id1545953110`)
2. Use WebFetch to load the page
3. Look for the RSS feed URL in the response (usually contains "feeds." or ends in ".xml" or ".rss")

**Common RSS feed patterns:**
- Megaphone: `https://feeds.megaphone.fm/SHOWNAME`
- Libsyn: `https://SHOWNAME.libsyn.com/rss`
- Anchor/Spotify: `https://anchor.fm/s/SHOWID/podcast/rss`
- Simplecast: `https://feeds.simplecast.com/SHOWID`
- Buzzsprout: `https://feeds.buzzsprout.com/SHOWID.rss`

### Testing RSS Feeds

```bash
# Verify feed works
yt-dlp --flat-playlist --print "%(title)s" \
  "https://feeds.megaphone.fm/hubermanlab" --playlist-end 3

# Get episode count
yt-dlp --flat-playlist --print "%(title)s" \
  "https://feeds.megaphone.fm/hubermanlab" | wc -l
```

### Config Example

```json
{
  "id": "huberman-lab",
  "name": "Huberman Lab",
  "url": "https://feeds.megaphone.fm/hubermanlab",
  "type": "channel",
  "enabled": true,
  "tags": ["podcast", "science", "health"]
}
```

### Known Podcast RSS Feeds

| Podcast | RSS Feed URL |
|---------|--------------|
| Huberman Lab | `https://feeds.megaphone.fm/hubermanlab` |
| Lex Fridman | `https://lexfridman.com/feed/podcast/` |
| All-In Podcast | `https://feeds.megaphone.fm/all-in-with-chamath-jason-sacks-friedberg` |
| Acquired | `https://feeds.acquired.fm/acquired` |

## SoundCloud

Supports public tracks and playlists.

### URL Formats

| Type | Format |
|------|--------|
| User | `soundcloud.com/username` |
| Track | `soundcloud.com/username/track-name` |
| Playlist | `soundcloud.com/username/sets/playlist-name` |

### Testing Access

```bash
yt-dlp --flat-playlist --print "%(title)s" \
  "https://soundcloud.com/username" --playlist-end 5
```

### Config Example

```json
{
  "id": "artist-name",
  "name": "Artist Name",
  "url": "https://soundcloud.com/artist-name",
  "type": "channel",
  "enabled": true,
  "tags": ["audio"]
}
```

## Vimeo

Professional video hosting platform.

### URL Formats

| Type | Format |
|------|--------|
| Video | `vimeo.com/VIDEO_ID` |
| Channel | `vimeo.com/channels/name` |
| User | `vimeo.com/user/username` |
| Showcase | `vimeo.com/showcase/ID` |

### Testing Access

```bash
yt-dlp --flat-playlist --print "%(title)s" \
  "https://vimeo.com/channels/staffpicks" --playlist-end 5
```

### Notes

- Some content may be password-protected
- Quality depends on uploader settings
- Professional content often has good transcripts

## Twitch

VODs and clips from streams.

### URL Formats

| Type | Format |
|------|--------|
| VOD | `twitch.tv/videos/VIDEO_ID` |
| Clip | `twitch.tv/CHANNEL/clip/CLIP_ID` |
| Channel VODs | `twitch.tv/CHANNEL/videos` |

### Testing Access

```bash
yt-dlp --flat-playlist --print "%(title)s" \
  "https://www.twitch.tv/channelname/videos" --playlist-end 5
```

### Notes

- Live streams cannot be processed
- VODs may be deleted after time
- Subscriber-only VODs require authentication

## Platform Comparison

| Platform | Transcripts | Auth Required | Speed | Reliability |
|----------|-------------|---------------|-------|-------------|
| YouTube | Built-in | No | Fast | Excellent |
| RSS Feeds | Whisper | No | Medium | Excellent |
| SoundCloud | Whisper | No | Medium | Good |
| Vimeo | Varies | Sometimes | Fast | Good |
| Twitch | Whisper | Sometimes | Slow | Fair |

## Multi-Platform Config Example

Combine sources from different platforms:

```json
{
  "name": "AI Research Multi-Source",
  "keywords": ["AI", "machine learning", "GPT"],
  "sources": [
    {
      "id": "lex-youtube",
      "name": "Lex Fridman (YouTube)",
      "url": "https://www.youtube.com/@lexfridman",
      "type": "channel",
      "tags": ["youtube", "interviews"]
    },
    {
      "id": "huberman-rss",
      "name": "Huberman Lab (RSS)",
      "url": "https://feeds.megaphone.fm/hubermanlab",
      "type": "channel",
      "tags": ["rss", "science"]
    },
    {
      "id": "acquired-rss",
      "name": "Acquired (RSS)",
      "url": "https://feeds.acquired.fm/acquired",
      "type": "channel",
      "tags": ["rss", "business"]
    }
  ],
  "settings": {
    "maxVideosPerSource": 20,
    "summaryLength": "xl",
    "summaryPrompt": "Comprehensive notes.\n\nTitle: {title}",
    "outputDir": "multi-platform-research"
  }
}
```

## Platforms NOT Supported

### Spotify
Spotify's podcast extractor in yt-dlp is currently broken. Use RSS feeds instead - most Spotify-hosted podcasts have RSS feeds available.

### Apple Podcasts (direct)
Apple Podcasts URLs don't work directly. Extract the RSS feed URL from the Apple Podcasts page and use that instead.

### Paywalled Content
Content behind paywalls (Patreon, paid podcasts, etc.) generally cannot be accessed without authentication, which may violate terms of service.
