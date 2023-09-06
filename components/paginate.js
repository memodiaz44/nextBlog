import _ from 'lodash'

export function paginate( posts, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize
    return _(posts).slice(startIndex).take(pageSize).value()
}