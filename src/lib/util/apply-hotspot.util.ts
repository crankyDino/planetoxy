/**
 * TODO: figure out a better method than setTimeout
*/
// const centerHotspot =(node?: HTMLElement) => {
export
    const centerHotspot = <T extends HTMLElement>(node: T, image: any) => {
        const img = new Image();
        img.src = image.banner?.asset?.url!;
        img.onload = () => {
            const imageWidth = img.naturalWidth;
            const imageHeight = img.naturalHeight;
            console.log(img.computedStyleMap());

            const { width: containerWidth, height: containerHeight } =
                node.getBoundingClientRect();

            node.style.backgroundPosition = applyHotSpot(node!, image, {
                containerWidth,
                containerHeight,
                imageWidth,
                imageHeight,
            });
        };
    };

function applyHotSpot<T extends HTMLElement>(_node: T, image: any, args: any): string {
    // let x = setTimeout(() => {
    if (_node && image.banner?.hotspot!) {
        let { width, height, x, y } = image.banner.hotspot!;
        // console.log(banner);
        // console.log(args);
        console.log(image.banner);
        // console.log("x", args["imageWidth"]);

        console.log("height", _node.offsetHeight);
        console.log("height", args["imageHeight"]);
        console.log("y", y);
        // console.log(
        //   "cl",
        //   Math.floor((args["imageHeight"]! * y!) / _node.offsetHeight!)
        // );
        console.log(
            "cl",
            (((args["imageHeight"]! * image.banner.hotspot.height!) /
                Math.floor(args["imageHeight"]! / args["containerHeight"]!)) *
                100) /
            2
        );
        console.log("cl", args["containerHeight"]!);
        console.log("cl", args["imageHeight"]!);
        console.log(
            "cl",
            Math.floor(args["imageHeight"]! / args["containerHeight"]!) * 100
        );
        // console.log("calc", x! * _node.offsetWidth!);
        // console.log("calc", `0 -${x! * (_node.offsetHeight! * 0.6)}px`);

        // posX = width || 0;
        // posY = height || 0;
        // _node.style.backgroundPosition = `0 -${x! * (_node.offsetHeight! * 0.6)}px`;
        // node.style.background = "pink";

        // const digitsBeforeDecimal =
        //   Math.floor(Math.log10(header.hotspot.height)) + 1; // Number of digits before the decimal point
        // const scaledNum =
        //   header.hotspot.height / Math.pow(10, digitsBeforeDecimal); // Scale the number down
        // const result = parseFloat(scaledNum.toFixed(4));

        // const imageAspectRatio = args["imageWidth"] / args["imageHeight"];

        // // How much the image needs to scale to fit the hotspot into the container
        // const scaleX =
        //   args["containerWidth"] /
        //   (_article.banner.hotspot.width! * args["imageWidth"]);
        // const scaleY =
        //   args["containerHeight"] /
        //   (_article.banner.hotspot.height! * args["imageHeight"]);
        // const scale = Math.max(scaleX, scaleY);

        // const bgWidth = scale * args["imageWidth"];
        // const bgHeight = scale * args["imageHeight"];

        // // Position so that hotspot is centered
        // const posX =
        //   (0.5 - _article.banner.hotspot.x!) * bgWidth +
        //   args["containerWidth"] / 2;
        // const posY =
        //   (0.5 - _article.banner.hotspot.y!) * bgHeight +
        //   args["containerHeight"] / 2;

        // const verticalOffsetFraction =
        //   (_article.banner.hotspot.y! * bgHeight - args["containerHeight"] / 2) /
        //   (bgHeight - args["containerHeight"]);
        // const horizontalOffsetFraction =
        //   (_article.banner.hotspot.x! * bgWidth - args["containerWidth"] / 2) /
        //   (bgWidth - args["containerWidth"]);
        // console.log(
        //   (args["imageHeight"] /
        //     ((_node.offsetHeight / 2 - y! * args["imageHeight"]) /
        //       args["imageHeight"])) *
        //     100
        // );
        // console.log(verticalOffsetFraction);

        // return `0px ${verticalOffsetFraction * 100}px`;

        // Container size
        const containerWidth = _node.offsetWidth;
        const containerHeight = _node.offsetHeight;
        const imageAR = args["imageWidth"] / args["imageHeight"];
        const containerAR = containerWidth / containerHeight;
        const aspectRatioDiff = imageAR / containerAR;
        // optional adjustment factor — tweak to taste or tune for perfection
        const verticalBias = Math.min(
            Math.max((aspectRatioDiff - 1) * 0.5, -1),
            1
        );

        // Bias the offsetY slightly to counter "too high" look
        const scale = containerWidth / args["imageHeight"];

        // Scaled image height
        const scaledImageHeight = args["imageHeight"] * scale;
        const imageOffsetY = (args["imageHeight"] - containerHeight) / 2;
        // Since background-size is 100%, image scales to container
        const hotspotX = image.banner.hotspot.x! * containerWidth;
        const hotspotY = image.banner.hotspot.y! * scaledImageHeight;

        const offsetX = containerWidth / 2 - hotspotX;
        const offsetY = containerHeight / 2 - hotspotY;
        const adjustedOffsetY = offsetY + verticalBias * 0.2 * containerHeight; // or scale it more
        console.log(offsetY);

        // const pos =
        //   (args["imageHeight"]! * _article.banner.hotspot.height!) /
        //   Math.floor(args["imageHeight"]! / args["containerHeight"]!);
        const pos = `0 ${adjustedOffsetY}px`;
        // return pos;
        if (imageAR < containerAR) {
            // Very tall image → maybe reduce offsetY slightly
            return `0 ${offsetY + 0.1 * containerHeight}px`;
        } else if (imageAR > containerAR) {
            // Very wide image → maybe raise it
            return `0 ${offsetY - 0.1 * containerHeight}px`;
        }
        // console.log(result);
        // header.hotspot. height = (bannerBox.offsetHeight * result) / 100;
    }
    //   clearTimeout(x);
    // }, 0);
    return "";
}
