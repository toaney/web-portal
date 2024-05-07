'use client'
// import {Provider} from '@adobe/react-spectrum';
// import {Calendar} from 'react-aria-components';

// import {Button, Calendar, CalendarCell, CalendarGrid, DateInput, DatePicker, DateSegment, Dialog, Group, Heading, Label, Popover} from 'react-aria-components';

import {Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue} from 'react-aria-components';

const Dashboard = () => {
  return (
    // <Provider>
      <div className="w-full h-full flex flex-col items-center">
        Dashboard
        {/* <DatePicker>
  <Label>Date</Label>
  <Group>
    <DateInput>
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <Button>▼</Button>
  </Group>
  <Popover>
    <Dialog>
      <Calendar>
        <header>
          <Button slot="previous">◀</Button>
          <Heading />
          <Button slot="next">▶</Button>
        </header>
        <CalendarGrid>
          {(date) => <CalendarCell date={date} />}
        </CalendarGrid>
      </Calendar>
    </Dialog>
  </Popover>
</DatePicker> */}






<Select>
  <Label>Favorite Animal</Label>
  <Button>
    <SelectValue />
    <span aria-hidden="true">▼</span>
  </Button>
  <Popover>
    <ListBox>
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBox>
  </Popover>
</Select>





      </div>
    // </Provider>
  )
}

export default Dashboard;