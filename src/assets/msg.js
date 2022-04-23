let notifySubscriber = () => {
    console.log("No subs");
};

const msg = [{
        "name": "Admin Admin",
        "text": "I Eat Fast Cake Times",
        "likes": "999"
    },
    {
        "name": "Admin Admin",
        "text": "tru above",
        "likes": "543"
    },
    {
        "name": "Admin Admin",
        "text": "cap above",
        "likes": "-43"
    }
];

export const addPost = (text) => {
    const content = {
        "name": "Admin Admin",
        "text": text,
        "likes": "0"
    };
    msg.push(content);
    notifySubscriber();
};

export default msg;
export const Subscribe = (callback) => {
    notifySubscriber = callback;
};