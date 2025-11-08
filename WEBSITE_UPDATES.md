# Website Personalization Summary

## Changes Made

### 1. Removed All Template Content
- ✅ Deleted all sample publications (5 files)
- ✅ Deleted all sample blog posts (5 files)
- ✅ Deleted all sample talks (4 files)
- ✅ Deleted all sample teaching entries (2 files)
- ✅ Deleted all sample portfolio items (2 files)

### 2. Updated Configuration (`_config.yml`)
- ✅ Changed site title to "Samira Hajizadeh"
- ✅ Updated description to "Academic researcher at Columbia University"
- ✅ Updated bio to "Researcher at Columbia University"
- ✅ Switched theme to "air" for a more modern look
- ✅ Kept your contact information:
  - Email: sh4635@columbia.edu
  - Location: New York, NY
  - Employer: Columbia University
  - Google Scholar: https://scholar.google.com/citations?user=9bviFHMAAAAJ&hl=en
  - GitHub: SamiraHajizadeh

### 3. Updated About Page (`_pages/about.md`)
- ✅ Created a personalized welcome page
- ✅ Removed all template instructions
- ✅ Added professional sections: About Me, Research Interests, Academic Journey, Get in Touch
- ✅ Includes placeholders for you to fill in specific research areas

### 4. Updated CV Pages
- ✅ Cleaned CV markdown page with placeholder sections
- ✅ Updated cv.json with your real information
- ✅ Ready for you to add:
  - Educational background
  - Work experience
  - Skills
  - Service and leadership activities

### 5. Simplified Navigation (`_data/navigation.yml`)
- ✅ Kept only Publications and CV in the main menu
- ✅ Commented out sections you haven't populated yet (Talks, Teaching, Portfolio, Blog Posts)
- ✅ Easy to uncomment sections as you add content

## Visual Improvements

### Modern "Air" Theme
The site now uses the "air" theme which provides:
- Cleaner, more modern aesthetic
- Better readability
- Professional appearance

## Next Steps to Further Personalize Your Site

### 1. Update About Page
Edit `_pages/about.md` and replace the placeholders:
- `[your research area - to be updated with specific interests]`
- `[specific field/domain]`
- `[mention key skills/approaches]`
- `[your field]`

### 2. Complete Your CV
Edit `_pages/cv.md` to add:
- Your educational background
- Work experience details
- Technical and professional skills
- Service and leadership roles

### 3. Add Publications
When ready, create files in `_publications/` folder using this format:

```markdown
---
title: "Your Paper Title"
collection: publications
category: manuscripts  # or conferences, books
permalink: /publication/YYYY-MM-DD-paper-name
excerpt: 'Brief description of the paper'
date: YYYY-MM-DD
venue: 'Journal or Conference Name'
paperurl: 'https://link-to-paper.com'
citation: 'Your Name. (Year). "Paper Title." <i>Venue</i>.'
---

Paper description and abstract here.
```

### 4. Optional: Add Profile Picture
Replace the file `images/profile.png` with your professional photo (recommended size: 400x400px)

### 5. Optional: Update CV PDF
Replace `files/cv.pdf` with your current CV PDF

### 6. Optional: Add Other Sections
As you create content, uncomment the relevant sections in `_data/navigation.yml`:
- Talks (create `.md` files in `_talks/`)
- Teaching (create `.md` files in `_teaching/`)
- Portfolio (create `.md` files in `_portfolio/`)
- Blog Posts (create `.md` files in `_posts/`)

## How to Deploy Changes

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Personalized website with clean template"
   ```

2. Push to GitHub:
   ```bash
   git push origin master
   ```

3. Wait 2-5 minutes for GitHub Pages to rebuild your site

4. Visit: https://samirahajizadeh.github.io/

## Important Files Reference

- **Main Configuration**: `_config.yml`
- **Navigation Menu**: `_data/navigation.yml`
- **Home Page**: `_pages/about.md`
- **CV Page**: `_pages/cv.md`
- **CV Data (JSON)**: `_data/cv.json`
- **Profile Image**: `images/profile.png`
- **Files/PDFs**: `files/` directory

## Tips

1. The site will automatically show your Google Scholar publications via the link on the Publications page
2. The footer will automatically update with the current year
3. The site uses Jekyll, so changes may take a few minutes to appear after pushing to GitHub
4. The "Guide" page (`/markdown/`) is kept for your reference on how to use Markdown and add content

## Need Help?

- Check the Guide page on your website: https://samirahajizadeh.github.io/markdown/
- Visit the Academic Pages documentation: https://github.com/academicpages/academicpages.github.io
- Review the Minimal Mistakes theme docs: https://mmistakes.github.io/minimal-mistakes/docs/configuration/

Your website is now clean, professional, and ready for you to add your content!

