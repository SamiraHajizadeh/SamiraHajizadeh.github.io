---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download PDF version]({{ site.baseurl }}/files/cv.pdf){: .btn .btn--primary}

Education
======
* Add your educational background here
  * Institution, Degree, Year
  * Notable achievements or coursework

Work Experience
======
* Add your work experience here
  * Position Title
  * Institution/Organization
  * Dates
  * Key responsibilities and achievements
  
Skills
======
* Add your technical and professional skills here
  * Research methodologies
  * Technical tools and software
  * Languages

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and Leadership
======
* Add your service activities and leadership roles here
  * Professional memberships
  * Committee work
  * Peer review activities
  * Conference organization
