---
title: "How to Build an Assignment Tracker in Notion (Step by Step)"
description: "A practical, no-fluff guide to building a Notion assignment tracker that shows what's due, when, and for which class — with the exact database properties to use."
keywords: ["notion assignment tracker", "track assignments in notion", "notion for students", "notion homework tracker"]
date: "2026-09-29"
---

Most students bounce between a paper planner, the syllabus PDF, and three
group chats to figure out what's actually due this week. A single Notion
database fixes that. Here's how to build one in about ten minutes.

## Step 1: Create the database

Make a new page, type `/table` and pick **Table view — Database**. Name it
**Assignments**. Every assignment will be one row.

## Step 2: Add the properties that matter

Don't over-engineer this. Five properties cover 95% of what you need:

- **Name** (title) — the assignment, e.g. "Essay 2: Cold War causes"
- **Course** (select) — one option per class, so you can filter by subject
- **Due** (date) — the deadline; this is what powers your calendar
- **Status** (status) — `Not started`, `In progress`, `Done`
- **Weight** (number, optional) — % of final grade, so you can see what's
  actually worth your time

The `Weight` property is the one most trackers skip, and it's the most
useful: a 2% quiz and a 30% paper are not the same emergency.

## Step 3: Add a "This Week" view

The raw table is fine, but the magic is the **filtered view**. Create a new
view called **This Week**:

- Filter: `Due` **is on or before** `one week from now`, and `Status` **is
  not** `Done`
- Sort: `Due`, ascending

Now you have a live list of exactly what to do next, and nothing else. Add a
**Board** view grouped by `Status` if you like seeing things move from column
to column.

## Step 4: Add a calendar view

Create one more view as a **Calendar**, using the `Due` date. Deadlines that
were invisible in a syllabus PDF are suddenly obvious two weeks out — which is
when you can still do something about them.

## Step 5: Make adding assignments frictionless

The tracker only works if you actually put things in it. Two tricks:

1. Pin the database to your sidebar or phone home screen so it's one tap away.
2. At the start of each course, batch-enter every deadline from the syllabus
   in one sitting. Future-you will be grateful.

## Where people get stuck

The most common mistake is building something too complicated to maintain —
sub-tasks, relations to five other databases, formulas you'll never read. For
a tracker you update daily, boring and fast beats clever and fragile. Start
with the five properties above and only add more if you feel a real need.

If you'd rather not build it from scratch — and want the assignment tracker
already wired to a full student dashboard (schedule, notes, habits, and
grades) with an aesthetic layout — that's exactly what the template below is.
