import React, {useState} from "react"
import {action} from "@storybook/addon-actions"
import {Select} from "./Select";

export default {
    title: 'Select stories',
    component: Select
}

const onChangeAction = (action('select changed'))

export const Base = () => {
    const [value, setValue] = useState('2')

    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {title: 'Moscow', value: '1'},
                    {title: 'Kiew', value: '2'},
                    {title: 'Minsk', value: '3'}
                ]}

        />
    </>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {title: 'Moscow', value: '1'},
                    {title: 'Kiew', value: '2'},
                    {title: 'Minsk', value: '3'}
                ]}

        />
    </>
}