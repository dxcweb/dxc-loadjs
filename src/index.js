export default (url) => {
    return new Promise(resolve => {
        const doc = document
        const head = doc.head || (doc.getElementsByTagName('head')[0] || doc.documentElement)
        const node = doc.createElement('script')
        node.onload = () => {
            resolve()
        }
        node.onerror = function () { }
        node.async = true
        node.src = url
        head.appendChild(node)
    })
}