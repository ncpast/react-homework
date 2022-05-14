const ADD_POST = 'ADD_POST';
const ADD_LIKE = 'ADD_LIKE';
const SAVE_NOTE = 'SAVE_NOTE';

const store = {
    _notifySubscriber: () => {
        console.log("No subs");
    },

    _state: {
        posts: [{
                name: "Admin Admin",
                text: "I Eat Fast Cake Times",
                likes: "999"
            },
            {
                name: "Admin Admin",
                text: "tru above",
                likes: "543"
            },
            {
                name: "Admin Admin",
                text: "cap above",
                likes: "-43"
            }
        ],
        newPostText: ''
    },

    Subscribe(callback) {
        store._notifySubscriber = callback;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                const content = {
                    "name": "Admin Admin",
                    "text": action.content,
                    "likes": "0"
                };
                store._state.posts.push(content);
                break;
            case SAVE_NOTE:
                store._state.newPostText = action.content;
                break;
            case ADD_LIKE:
                store._state.posts[action.id].likes++;
                break;
            default:
                break;
        };

        store._notifySubscriber();
    }
};

export const addPostActionCreator = (content) => {
    return { type: ADD_POST, content: content };
};

export const addLikeActionCreator = (id) => {
    return { type: ADD_LIKE, id: id };
};

export const saveNoteActionCreator = (text) => {
    return { type: SAVE_NOTE, content: text };
};

export default store;