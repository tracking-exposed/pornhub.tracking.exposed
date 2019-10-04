Hugo TRex Theme
===============

Hi. I'm the hugo TRex starter theme. I'm a theme meant for hacking so try
turning me into the next awesome TRex website. That's what I'm here for.


## Getting Started

1. Download the **trex** theme folder into Hugo theme folder

```
cd new-site.tracking.exposed/themes
git clone https://github.com/tracking-exposed/hugo-theme-trex trex
```

2. In the `config.toml` file of your new site edit the value `theme="trex"`
3. Copy sample content from `exampleSite` into the sites `contents` folder


## Config File

For each site modify the `config.toml` to define the following Hugo `[params]`

```
[params]
  subtitle = ""
  subsite = "default"
  description = ""  
  tagline = ""
```

- `subtitle` - title of the site as written along side `Tracking Exposed`
- `subsite` - name-space used in HTML and CSS classes (lowercase + no spaces)
- `description` - the main `<meta>` description for the site used for SEO
- `tagline` - text that is shown in the home page banner above featured


## Menus

There are multipe *"menus"* that get re-used in different areas of the site.
The following are the three that are **required** for the theme to build.

- `[[menu.main]]` - the links in the `<navbar>` at the top of pages
- `[[menu.featured]]` - featured boxes on home page of each site (max 3)
    * `pre` - value for background image path
    * `post` - value for description text
- `[[menu.footer]]` - special per site links in `<footer>` of pages

``` 
[menu] 
  [[menu.main]]
     page = "Help"
     identifier = "help"
     name = "Help"
     url = "/help/"
     weight = -150
  
  [[menu.featured]]
     page = "Facebook"
     identifier = "facebook"
     name = "Facebook"
     pre = "path-to-images" #backgrodund image path
     post = "comment text" #add a description text
     url = "https://facebook.tracking.exposed"
     weight = -180

  [[menu.footer]]
      page = "Help"
      identifier = "help"
      name = "Help"
      url = "/help/"
      weight = -150
```

Extra menus can be added as needed such as in `tracking.exposed/config.toml`

## Frontmatter parameters

Into the Frontmatter of `.md` files, you can define this parameters:

- title: "The page h1"
- subtitle: "The page h2"
- description: "The page's metadata description"
- date: 2019-02-07T15:01:21+01:00
- draft: false


## SASS Architecture

The following files are how the SASS that is compiled into CSS are organized.
The theme is built on top of using [Bootstrap 4](https://getbootstrap.com)
framework.

- `assets/_bootstrap_customization.scss` - proper extensions of various Bootstrap classes
- `assets/_components.scss` - specific custom classes for areas of sites for apps (Reality Check, Zuckless News)
- `assets/_mixins.scss` - reusable SASS mixins that extend or customize Boostrap styles or custom things
- `assets/_variables.scss` - used throughout all SASS files
- `assets/main.scss` - main file which has global `body.subsite` class and other custom things


## Shortcode

### Extension shortcodes
You can have links to different browser extension anywhere you may want via shortcode, just call the following in your `.md` file (i.e. into the _index.md):

- **Youtube extension**: `{{< yt-extension >}}`
- **FaceBook extension**: `{{< fb-extension >}}`

### Typography shortcodes

#### Colored text block

- {{< boxes text="Your text" >}} *Primary color as background*
- {{< boxes color="secondary" text="Your text" >}} *Secondary color as background*
- {{< boxes color="red" text="Your text" >}} *Red color as background*
- {{< boxes color="yellow" text="Your text" >}} *Yellow color as background*

#### Images
**Images alignment**

- {{< figure src="image-url" alt="" class="align-right">}} `class="align-right"` 
- {{< figure src="image-url" alt="" class="align-left">}} `class="align-left"`
- {{< figure src="image-url" alt="" class="align-center">}} `class="align-center"`

**Images sizes**

- {{< figure src="image-url" alt="" class="full" >}} `class="full"` *100% of the page*
- {{< figure src="image-url" alt="" class="half" >}} `class="half"` *50% of the page*



## Updating Theme

As the theme is updated and developed in the future, for instance once a new
color scheme (for a subsite) is created, do the following steps

```
cd new-site.tracking.exposed/theses/trex
git pull origin master
```

Then `hugo build` and voila the theme is updated
