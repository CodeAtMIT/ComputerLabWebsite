# 📅 Events Section Editing Guide

This guide will help you easily add, edit, or remove events from your Computer Lab website's Events section.

---

## 📁 File Location

The Events section is located at: **`/components/Events.tsx`**

---

## 🎯 Quick Overview

The Events section displays:
- **Upcoming Events** (hackathons, workshops, training, etc.)
- **Past Events** (newsletters, inspections, completed activities)
- Event cards with images, dates, times, locations, and descriptions
- Tabs to switch between upcoming and past events

---

## ✨ How to Add a New Event

### Step 1: Open the Events File
Navigate to `/components/Events.tsx` and find the `events` array (around line 9).

### Step 2: Copy This Template

```javascript
{
  id: 7,                                    // Change to next available number
  title: "Your Event Name",                 // Event title
  type: "Workshop",                         // Event type (see options below)
  category: "upcoming",                     // "upcoming" or "past"
  date: "April 10, 2025",                   // Event date
  time: "10:00 AM - 2:00 PM",              // Event time
  location: "Computer Lab - Room 502B",     // Event location
  description: "Brief description of your event and what participants will learn or do.",
  image: "YOUR_IMAGE_URL_HERE",            // Image URL (see Image Guide below)
  participants: "100 Students",             // Expected/actual participants
  icon: BookOpen,                          // Icon (see Icon Options below)
  color: "from-blue-600 to-cyan-600",      // Gradient colors (see Color Options)
  badgeColor: "bg-blue-100 text-blue-700"  // Badge colors
}
```

### Step 3: Paste and Customize
1. Copy the template above
2. Paste it inside the `events` array (after the last event, before the closing `]`)
3. Add a comma after the previous event
4. Update all the values to match your new event

### Step 4: Example - Adding a Coding Competition

```javascript
const events = [
  // ... existing events ...
  {
    id: 7,
    title: "Python Programming Competition",
    type: "Competition",
    category: "upcoming",
    date: "April 25, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Computer Lab - Room 502B",
    description: "Test your Python programming skills in this competitive event. Solve challenging problems and win exciting prizes worth ₹30,000.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1080",
    participants: "120 Students",
    icon: Trophy,
    color: "from-yellow-600 to-orange-600",
    badgeColor: "bg-yellow-100 text-yellow-700"
  }
];
```

---

## 🗑️ How to Remove an Event

### Simple Method: Delete the Entire Event Object

1. Open `/components/Events.tsx`
2. Find the event you want to remove in the `events` array
3. Delete the entire event object (from `{` to `}` including the comma)
4. Save the file

**Example:**
```javascript
const events = [
  {
    id: 1,
    title: "Event to Keep",
    // ... rest of the event
  },
  // DELETE THIS ENTIRE BLOCK ↓
  {
    id: 2,
    title: "Event to Remove",
    type: "Workshop",
    category: "upcoming",
    // ... rest of the event
  },
  // DELETE THIS ENTIRE BLOCK ↑
  {
    id: 3,
    title: "Another Event to Keep",
    // ... rest of the event
  }
];
```

---

## ✏️ How to Edit an Existing Event

1. Open `/components/Events.tsx`
2. Find the event you want to edit
3. Modify any field (title, date, description, etc.)
4. Save the file

**Example - Changing Event Date and Time:**
```javascript
{
  id: 1,
  title: "Annual Hackathon 2025",
  type: "Hackathon",
  category: "upcoming",
  date: "March 15-16, 2025",  // ← Change this
  time: "9:00 AM - 6:00 PM",  // ← Change this
  location: "Computer Lab - Room 502B",
  // ... rest remains the same
}
```

---

## 📸 How to Change Event Images

### Option 1: Using Unsplash (Recommended)
1. Go to [Unsplash.com](https://unsplash.com)
2. Search for relevant images (e.g., "coding workshop", "tech event")
3. Click on an image
4. Right-click and copy the image URL
5. Paste the URL in the `image` field

**Example:**
```javascript
image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1080",
```

### Option 2: Using Your Own Images
1. Upload your image to GitHub (follow `GITHUB_IMAGE_UPLOAD_GUIDE.md`)
2. Copy the raw image URL
3. Paste it in the `image` field

---

## 🎨 Event Type Options

Choose the appropriate type for your event:

| Type | When to Use |
|------|-------------|
| `"Hackathon"` | Coding marathons, innovation challenges |
| `"Workshop"` | Hands-on training sessions |
| `"Training"` | Multi-day skill development programs |
| `"Exhibition"` | Project showcases, tech fairs |
| `"Newsletter"` | Monthly/quarterly publications |
| `"Inspection"` | Lab equipment checks, audits |
| `"Competition"` | Coding contests, quizzes |
| `"Seminar"` | Guest lectures, talks |
| `"Conference"` | Large-scale tech events |

---

## 📂 Category Options

Only 2 options available:

- `"upcoming"` - Event hasn't happened yet
- `"past"` - Event already completed

**Note:** Past events show "Event Completed" button and are disabled.

---

## 🎨 Color Schemes (Gradients)

Copy these color combinations for your events:

### Primary Colors
```javascript
color: "from-blue-600 to-cyan-600"
badgeColor: "bg-blue-100 text-blue-700"
```

### Purple/Pink Theme
```javascript
color: "from-purple-600 to-pink-600"
badgeColor: "bg-purple-100 text-purple-700"
```

### Green Theme
```javascript
color: "from-green-600 to-emerald-600"
badgeColor: "bg-green-100 text-green-700"
```

### Orange/Red Theme
```javascript
color: "from-orange-600 to-red-600"
badgeColor: "bg-orange-100 text-orange-700"
```

### Yellow Theme
```javascript
color: "from-yellow-600 to-orange-600"
badgeColor: "bg-yellow-100 text-yellow-700"
```

### Teal Theme
```javascript
color: "from-teal-600 to-cyan-600"
badgeColor: "bg-teal-100 text-teal-700"
```

### Indigo Theme
```javascript
color: "from-indigo-600 to-purple-600"
badgeColor: "bg-indigo-100 text-indigo-700"
```

---

## 🎯 Icon Options

Import the icon at the top of the file if not already imported:

```javascript
import { Trophy, BookOpen, Newspaper, FileCheck, Users, Sparkles, Code, Cpu, Award, Zap, Calendar } from 'lucide-react';
```

Then use in your event:

| Icon Name | Usage | Best For |
|-----------|-------|----------|
| `Trophy` | Competitions, hackathons | Competitive events |
| `BookOpen` | Workshops, seminars | Learning sessions |
| `Newspaper` | Newsletters, publications | Communications |
| `FileCheck` | Inspections, audits | Administrative |
| `Users` | Training, team events | Group activities |
| `Sparkles` | Exhibitions, showcases | Special events |
| `Code` | Coding events | Programming-focused |
| `Cpu` | Tech events | Hardware/systems |
| `Award` | Ceremonies, achievements | Recognition events |
| `Zap` | Innovation events | Creative sessions |
| `Calendar` | General events | Any event type |

**Example:**
```javascript
icon: Trophy,  // No quotes needed!
```

---

## 🔢 Complete Example: Adding a New Workshop

Here's a full example showing where and how to add a new event:

```javascript
export function Events() {
  const events = [
    // ... existing events ...
    {
      id: 6,
      title: "Annual Lab Equipment Inspection",
      type: "Inspection",
      category: "past",
      // ... rest of existing event
    },
    // ADD YOUR NEW EVENT HERE ↓
    {
      id: 7,
      title: "Web Development Bootcamp",
      type: "Workshop",
      category: "upcoming",
      date: "May 5-6, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Computer Lab - Room 502B",
      description: "Intensive 2-day bootcamp covering HTML, CSS, JavaScript, React, and modern web development practices. Build 3 projects and get certified.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1080",
      participants: "50 Students",
      icon: Code,
      color: "from-indigo-600 to-purple-600",
      badgeColor: "bg-indigo-100 text-indigo-700"
    }
  ];
  // ... rest of the component
```

---

## ⚠️ Common Mistakes to Avoid

### ❌ Mistake 1: Forgetting Commas
```javascript
// WRONG - Missing comma
{
  id: 5,
  title: "Event 1"
}  // ← Missing comma here!
{
  id: 6,
  title: "Event 2"
}

// CORRECT
{
  id: 5,
  title: "Event 1"
},  // ← Comma added
{
  id: 6,
  title: "Event 2"
}
```

### ❌ Mistake 2: Duplicate IDs
```javascript
// WRONG - Same ID used twice
{ id: 5, title: "Event A" }
{ id: 5, title: "Event B" }  // ← ID must be unique!

// CORRECT
{ id: 5, title: "Event A" }
{ id: 6, title: "Event B" }  // ← Unique ID
```

### ❌ Mistake 3: Icon in Quotes
```javascript
// WRONG
icon: "Trophy",  // ← Don't use quotes!

// CORRECT
icon: Trophy,    // ← No quotes
```

### ❌ Mistake 4: Wrong Category Name
```javascript
// WRONG
category: "future",     // ← Invalid
category: "completed",  // ← Invalid

// CORRECT
category: "upcoming",   // ← Only these two
category: "past",       // ← work!
```

---

## 🔄 Moving Event from Upcoming to Past

When an event is completed, simply change the category:

**Before:**
```javascript
{
  id: 2,
  title: "AI Workshop",
  category: "upcoming",  // ← Event hasn't happened yet
  // ... rest of event
}
```

**After:**
```javascript
{
  id: 2,
  title: "AI Workshop",
  category: "past",  // ← Event is now completed
  // ... rest of event
}
```

The event will automatically:
- Move to the "Past Events" tab
- Show "Event Completed" button (disabled)
- Display with grey badge

---

## 📊 Event Counter

The event count in tabs updates automatically:

```
Upcoming Events (4)  ← Automatically counts upcoming events
Past Events (2)      ← Automatically counts past events
```

No manual updates needed!

---

## 💡 Pro Tips

### Tip 1: Keep Descriptions Concise
- Aim for 150-200 characters
- Focus on key benefits and outcomes
- Mention prizes, certificates, or learning outcomes

### Tip 2: Use High-Quality Images
- Minimum resolution: 1080px width
- Relevant to the event type
- Professional-looking photos work best

### Tip 3: Consistent Naming
- Use clear, descriptive event titles
- Include year for annual events
- Capitalize properly

### Tip 4: Update Regularly
- Move completed events to "past" category
- Remove very old past events (older than 6 months)
- Keep upcoming events fresh and relevant

### Tip 5: Color Coding
- Use similar colors for similar event types
- Hackathons → Purple/Pink
- Workshops → Blue/Cyan
- Training → Green/Emerald
- Newsletters → Indigo/Purple

---

## 🆘 Quick Troubleshooting

### Problem: Website shows error after adding event
**Solution:** Check for:
- Missing commas between events
- Unmatched curly braces `{ }`
- Icon name matches import at top of file

### Problem: Event image not showing
**Solution:**
- Verify image URL is accessible
- Check URL is wrapped in quotes
- Try a different image URL

### Problem: Event not appearing on website
**Solution:**
- Verify event has correct category (`"upcoming"` or `"past"`)
- Check you saved the file
- Refresh your browser (Ctrl+F5 or Cmd+Shift+R)

---

## 📋 Quick Reference Checklist

When adding a new event, make sure you have:

- [ ] Unique ID number
- [ ] Event title
- [ ] Event type
- [ ] Category (upcoming/past)
- [ ] Date and time
- [ ] Location
- [ ] Description (150-200 characters)
- [ ] Valid image URL
- [ ] Participant count
- [ ] Icon imported and referenced correctly
- [ ] Color gradient
- [ ] Badge color
- [ ] Comma after previous event
- [ ] File saved

---

## 🎓 Example: Full Events Array Structure

```javascript
const events = [
  {
    id: 1,
    title: "First Event",
    type: "Hackathon",
    category: "upcoming",
    date: "March 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Computer Lab - Room 502B",
    description: "Event description here.",
    image: "https://images.unsplash.com/...",
    participants: "150+ Students",
    icon: Trophy,
    color: "from-purple-600 to-pink-600",
    badgeColor: "bg-purple-100 text-purple-700"
  },
  {
    id: 2,
    title: "Second Event",
    // ... full event object
  }
  // Add more events here
];
```

---

## 📞 Need More Help?

- Check other guide files: `GALLERY_IMAGE_GUIDE.md`, `LOGO_REPLACEMENT_GUIDE.md`
- Review the complete file: `/components/Events.tsx`
- Test changes by refreshing your browser

---

**Remember:** Always save the file after making changes and refresh your browser to see updates!

**Happy Event Managing! 🎉**
