import Card from './Card/index.vue';
import Tree from './Tree/index.vue';

const compoents: any = {
    Card,
    Tree,
};
const registCompoents = (app: any) => {
    Object.keys(compoents).map((key) => {
        app.component(key, compoents[key]);
    });
};

export default registCompoents;
