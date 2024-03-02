/*
awit fetch 
res --> ok(res.json) or not(throw error) 
data --> return 
-- catch(e)- return r
*/

// quotes api
export const getRandomeQuote = async () => {
    return await fetch("https://apis.gdscasu.com/quote")
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP response was not ok");
            }
            return res.json();
        })
        .then((d) => {
            console.log(d);
            return {
                quote: d.text,
                author: d.author,
            };
        })
        .catch((e) => {
            return e;
        });
};

// image api
export const getRandomeImage = async () => {
    return await fetch("https://apis.gdscasu.com/image")
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP response was not ok");
            }
            return res.json();
        })
        .then((d) => {
            console.log(d);
            return {
                imgSrc: d.images[0],
            };
        })
        .catch((e) => {
            return e;
        });
};
