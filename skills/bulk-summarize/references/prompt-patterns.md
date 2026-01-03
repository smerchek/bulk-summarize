# Prompt Patterns

Effective summarization prompts organized by content type and duration.

## By Content Duration

### Short-form (< 15 minutes)

```
Concise summary of the main point and key details. Focus on the core message.

Title: {title}
```

### Medium-form (15-45 minutes)

```
Detailed summary covering main topics discussed. Include key takeaways and notable points.

Title: {title}
```

### Long-form (45 minutes - 2 hours)

```
Comprehensive summary organized by topic. Include: main themes, key insights, important quotes, and actionable points.

Title: {title}
```

### Extended content (2+ hours)

```
Thorough summary organized by major sections/topics. For each section include: main discussion points, key insights, notable quotes, and resources mentioned. Be comprehensive given the length.

Title: {title}
```

## By Content Type

### Interview/Podcast

```
Summarize this interview/podcast episode. Extract:
- Guest background and expertise
- Main topics discussed
- Key insights and opinions shared
- Notable quotes
- Resources, books, or tools mentioned
- Actionable advice given

Ignore: ads, sponsor segments, off-topic tangents.

Title: {title}
```

### Technical Tutorial

```
Create study notes from this technical content. Include:
- Prerequisites mentioned
- Main concepts explained (with code examples if shown)
- Step-by-step procedures
- Common mistakes or pitfalls warned about
- Tools and libraries used
- Practice exercises or next steps suggested

Title: {title}
```

### Conference Talk/Presentation

```
Summarize this presentation. Include:
- Speaker and their background
- Main thesis/argument
- Key points and supporting evidence
- New tools, APIs, or techniques introduced
- Code patterns or architectures shown
- Recommended resources

Title: {title}
```

### Product Review

```
Extract review information. Include:
- Product(s) being reviewed
- Key features highlighted
- Pros and cons mentioned
- Performance/quality assessment
- Price points discussed
- Comparison to alternatives
- Final verdict/recommendation

Focus on factual observations over subjective opinions.

Title: {title}
```

### News/Analysis

```
Summarize the news and analysis. Include:
- Key announcements or events
- Companies/people involved
- Implications discussed
- Timeline or dates mentioned
- Sources cited

Note: Information may be time-sensitive.

Title: {title}
```

### Educational/Explainer

```
Create learning notes from this explainer. Include:
- Core concept being explained
- Prerequisites for understanding
- Key definitions and terminology
- Examples and analogies used
- Common misconceptions addressed
- Related topics for further study

Title: {title}
```

### Documentary/Deep Dive

```
Comprehensive summary of this documentary. Include:
- Main subject and thesis
- Key facts and statistics
- People/experts featured
- Timeline of events
- Different perspectives presented
- Conclusions drawn

Title: {title}
```

## Specialized Prompts

### For Code-heavy Content

```
Technical summary focused on code and implementation. Extract:
- Languages/frameworks used
- Code patterns demonstrated
- Configuration shown
- Commands and CLI usage
- Error handling approaches
- Testing strategies

Format code examples clearly.

Title: {title}
```

### For Research Topics

```
Academic-style summary. Include:
- Research question or problem
- Methodology discussed
- Key findings
- Data and statistics cited
- Limitations mentioned
- Implications for the field
- References to other work

Title: {title}
```

### For Business/Strategy

```
Business-focused summary. Extract:
- Market analysis points
- Strategy recommendations
- Case studies mentioned
- Metrics and KPIs discussed
- Implementation steps
- Risk factors identified

Title: {title}
```

### For Personal Development

```
Actionable summary for personal growth. Include:
- Core principle or framework
- Specific techniques or practices
- Examples of application
- Common obstacles and solutions
- Recommended starting points
- Books/resources for deeper learning

Title: {title}
```

## Prompt Modifiers

Add these to any base prompt for specific behavior:

### Ignore Filler

```
Ignore: sponsors, ads, promotional content, personal anecdotes unrelated to topic, channel plugs, merchandise mentions.
```

### Focus on Practical

```
Prioritize actionable information over theory. Focus on "how to" over "what is".
```

### Preserve Structure

```
Maintain the original structure/outline of the content when possible.
```

### Extract Quotes

```
Include verbatim notable quotes with attribution.
```

### Link Resources

```
List all URLs, tools, books, and resources mentioned with context for each.
```

## Prompt Variables

Available placeholders in prompts:

| Variable | Description |
|----------|-------------|
| `{title}` | Video title |
| `{source}` | Source ID from config |

Example usage:
```
Summary for {source} channel.

Video: {title}
```
