import { Helmet } from "react-helmet";

export class SeoInator {

    constructor({title, description, url, imagePath}) {
        this.title = title;
        this.url = 'www.russelltankm.com' + url;
        this.description = description;
        this.imagePath = imagePath;
    }

    to_string() {
        console.log(this.title)
        console.log(this.url);
        console.log(this.description);
        console.log(this.imagePath);
    }

    insert_helmet() {
        return <Helmet>
            <title>Russell Tan | {this.title}</title>
            <meta name='description' content={this.description}/>
            <meta property="og:title" content={`Russell Tan | ${this.title}`}/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content={this.imagePath}/>
            <meta property="og:description" content={this.description}/>
            <meta property="og:url" content={this.url}/>
        </Helmet>
    }
}