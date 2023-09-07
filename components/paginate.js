import _ from 'lodash'
import 'tailwindcss/tailwind.css'


export function paginate( posts, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize
    return _(posts).slice(startIndex).take(pageSize).value()
}