import { ref } from 'vue'
let v = ref<string>('');

type props = {
    title: string
}

const renderDom = (props: props, ctx: any) => {
    return (
        <div>
            <div onClick={clickTap.bind(this, 12, ctx)}>{props.title}</div>
        </div>
    )
}


const clickTap = (value: number, ctx: any) => {
    console.log(value);
    ctx.emit('on-click', 123)
}
export default renderDom