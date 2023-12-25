//  定义接口限制 person 的具体属性
export interface PersonInter {
    id: string
    name: string
    age: number
}

export type Persons = Array<PersonInter>
