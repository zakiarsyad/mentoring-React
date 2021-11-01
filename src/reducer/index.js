const initialState = [
    // { desc: "Apple", count: 5 },
    // { desc: "Mango", count: 10 },
    // { desc: "Orange", count: 10 },
];

export default (state = initialState, action) => {
    /**
     *  action = {
     *      type: "ADD ITEM",
     *      data: {
     *          desc: "Orange", count: 10
     *      }
     *  }
     */
    switch (action.type) {
        case "ADD ITEM":
            /**
             * action.data = { desc: "Orange", count: 10 }
             */

            /**
             *  1. cari item di initialState yang desc = Orange
             *  2. Kalau ada, maka state[i].count += action.data.count
             *  3. Kalau ga ada, make tambah item baru
             */

            console.log(action);
            state.push(action.data);
            return state;
        case "DELETE ITEM":
            /**
             * action.data = { desc: "Orange", count: 10 }
             */

            /**
             * 1. cari item di initialState yang desc = Orange
             * 2. remove item tsb
             */

            return state;
        case "ADD COUNT":
            /**
             * action.data = { desc: "Orange", count: 20 }
             */

            /**
             * 1. cari item di initialState yang desc = Orange
             * 2. update count => action.data.count
             */

            return state;
        case "DELETE COUNT":
            /**
             * action.data = { desc: "Orange", count: 5 }
             */

            /**
             * 1. cari item di initialState yang desc = Orange
             * 2. update count => action.data.count
             */

            return state;
        default:
            return state;
    }
};
