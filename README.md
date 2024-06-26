# GraphiGen - Open Graph Image Generator

GraphiGen is a powerful and user-friendly Open Graph image generator that helps you create stunning preview images for
your website links when shared on social media platforms. With GraphiGen, you can customize and design captivating
visual representations of your web pages, making your content more engaging and shareable.


## Generate Open Graph Images with GraphiGen API

GraphiGen provides an API endpoint that allows you to dynamically generate Open Graph images for your blog posts.
These images can enhance the visual appeal of your shared links on social media platforms. The API supports
customization of author name, title, description, image, date, and content type.

To generate an Open Graph image using the GraphiGen API, make a GET request to the following endpoint:

```
https://graphigen.vercel.app/api/og
```

You can customize the parameters as follows:

- `author`: The author's name.
- `title`: The title of the blog post.
- `category`: The title of the blog post category *(optional)*.
- `description`: A brief description of the blog post.
- `image`: URL of the image to be displayed on the Open Graph image.
- `date`: Date of the blog post.
- `locale`: Locale of the date *(optional, `en-US` by default)*.
- `max`: Max symbols in the brief *(optional)*.
- `type`: Content type (e.g., "blog").

Here's an example URL with parameters:

```
https://graphigen.vercel.app/api/og?author=Akhil%20G%20Krishnan&title=Creating%20Engaging%20Open%20Graph%20Images&description=Learn%20how%20to%20create%20eye-catching%20Open%20Graph%20images%20for%20your%20blog%20posts.&image=https://blog.saeloun.com/images/og_logo.png&date=2023-08-14&type=blog
```
![Blog OG image example](https://github.com/akhilgkrishnan/graphigen/assets/22231095/73359d8b-f22f-4b74-add5-9bd268f464f0)


This URL would generate an Open Graph image with the specified details.

Please note that this is a simplified example, and you might need to encode URL parameters if they contain special characters.

You can use this API endpoint to dynamically generate Open Graph images for your blog posts and integrate them into your website or application to enhance the sharing experience on social media platforms.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
