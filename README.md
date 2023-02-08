# PokeSeek
Where's that Pokemon?

### [Live Demo](https://pokeseek.vercel.app/)

![portfolio](docs/pokeseek-desktop.gif)

#### 💡 Features
* Technology Stack:
The application is built using Next.js, Chakra UI and Firebase. Next.js provides server-side rendering, optimized performance, and automatic code splitting, making it a powerful framework for building scalable web applications. Chakra UI is used for creating a responsive and accessible UI, while Firebase is used for data storage and retrieval.

* Data Retrieval:
The application fetches stage data from Firestore, which is a NoSQL database provided by Firebase. This allows for easy data retrieval and storage, making it quick and simple to access the necessary information for the application.

* Image Hotspots:
The image hotspots in the application are made using usemap and are fully responsive, using the following code:
```
  const [ width, setWidth ] = useState(0);
  const [ height, setHeight ] = useState(0);

  //original image resolution
  const originalWidth = 900;
  const originalHeight = 1200;

  //function to return coords of each area map based on level.hotspots
  const returnAreaMap = ( obj ) => {
    const x1 = obj.coords[0] * ( width / originalWidth );
    const y1 = obj.coords[1] * ( height / originalHeight );
    const x2 = obj.coords[2] * ( width / originalWidth );
    const y2 = obj.coords[3] * ( height / originalHeight );

    return `${ x1 }, ${ y1 }, ${ x2 }, ${ y2 }`
  };

  useEffect(() => {
    const image = document.querySelector( '#level-image' );
    setWidth( image.clientWidth );
    setHeight( image.clientHeight );

    const handleResize = () => {
      setWidth( image.clientWidth );
      setHeight( image.clientHeight );
    }

    window.addEventListener( 'resize', handleResize );

    return () => {
      window.removeEventListener( 'resize', handleResize );
    }
  }, [])
```
 This ensures a seamless experience for users regardless of the device they are using. These hotspots allow users to interact with the images, making it easier to find Waldo in each stage.


#### 🛠️ Built with
* Next.js
* Firebase
* Chakra UI


 #### 🛠️ Future Features:
* Adding functionality to save users highscore (duration to find all pokemon in a stage)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.