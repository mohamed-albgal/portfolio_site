# Mohamed Albgal's Portfolio Site

## Built with GatsbyJS, TailwindCSS, ReactJS



This site can be used and modified as needed. S3 is used for hosting and the build is uploaded to the bucket by running npm deploy. See the gatsby-config for bucket specifics.

All site content is contained in the contents folder in the root of the project. Therein are YAML files that are imported into the specific components where the content should be rendered. The YAML's keys are used as props for the page components so be sure to make symmetrical modfications.

Images are named so that an underscore delimits the key for which they can be indexed. 

Tailwind css allows for faster styling by importing their large menu of css class mappings. PurgeCSS removes the unused style classes to limit the size of the final build.

This project is "never finished" but some quick next tasks to get to a good stopping point include:
- importing images into their corresponding .js files instead of using the static folder. 
- Some images need to be resized as they are far too large.
- Utilize github actions for some CI/CD goodness.

Please reach out to me with any questions or suggestions! Feel free to fork!