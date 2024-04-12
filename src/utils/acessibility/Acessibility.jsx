

export async function AcessibilityReporter(){
    if (process.env.NODE_ENV === `development`){
        const {default: axe} = await import(`@axe-core/react`)
        const React = await import("react")
        const ReactDOM = await import("react-dom")
        axe(React,ReactDOM, 1000)
    }
}