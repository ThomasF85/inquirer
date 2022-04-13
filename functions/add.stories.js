import add from './add.js'
export default {
    title: 'add',
    component: add
}
          
const Template = args => <add {...args} />
      
export const Default = Template.bind({})
Default.args = {}