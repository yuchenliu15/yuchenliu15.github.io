---
layout: default
title: Yuchen's blog 
---

<div class="intro">
        {% for post in site.posts %}
                <div>
                    <h2 class="blog-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
                    <p class="blog-date">{{ post.date | date: '%B %d, %Y' }}</p>
                </div>
        {% endfor %}
</div>
