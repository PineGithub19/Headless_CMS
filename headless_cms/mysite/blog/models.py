from django.db import models
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel

from wagtail.api import APIField

class BlogPage(Page):
    author = models.CharField(max_length=255, blank=True)
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel("author"),
        FieldPanel("body"),
    ]

    api_fields = [
        APIField("author"),
        APIField("body"),
        APIField("owner"),
        APIField("first_published_at"),
    ]