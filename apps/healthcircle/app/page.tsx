'use client'
import { Button } from '@healthcircle/ui';
import './global.css';
import Textinput from 'packages/ui/src/lib/textinput/textinput';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
          <p className="text-3xl text-green-500 font-bold underline bg-red-500">
             Hello world! tailwind testing
            </p>
            <h1 className="bg-customText1">
             Hello world!
            </h1>
          </div>
          
           <div className='cc'>
           <Button>Primary</Button> <br /><br />
           <Button variant="secondary">Secondary</Button><br /><br />
           <Button size="large">Large Button</Button><br /><br />
           <Button size="small">Small Button</Button><br /><br />
           <Textinput label="Customer Name:" />
           </div>                
        </div>
      </div>
  );
}
