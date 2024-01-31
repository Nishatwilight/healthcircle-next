// 'use client'
import { Button } from '@healthcircle/ui';
import './global.css';

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
          <h1 className="text-3xl font-bold underline bg-red-500">
             Hello world!
            </h1>
            <h1 className="bg-customText1">
             Hello world!
            </h1>
          </div>
           <Button>Primary</Button> <br /><br />
           <Button variant="secondary">Secondary</Button><br /><br />
           <Button size="large">Large Button</Button> <br /><br />
           <Button size="small">Large Button</Button>
        </div>
      </div>
  );
}
