import React from 'react';
import {
  Card, CardContent, Typography,
} from '@mui/material';

const Services = () => (
  <div className="w-full min-h-screen flex flex-col items-center gap-10">
    <h1 className="text-lg font-bold "> SERVICES</h1>
    <p className="font-semibold text-3xl">I offer all these services</p>
    <ul className="flex items-center justify-center gap-8">
      <li>
        <Card sx={{ width: 300, height: 300 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Web Development
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I can build you a website that is responsive and looks great on all devices.
              {' '}
              <br />
              {' '}
              The website can be built using HTML, CSS, JavaScript, React, Ruby,Ruby on Rails  and Postgresql.
              {' '}
              <br />
              {' '}
              Fast and Reliable Web Development!
            </Typography>
          </CardContent>
        </Card>
      </li>
      <li>
        <Card sx={{ width: 300, height: 300 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Web Design
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I can design the best looking  website for your business.
              {' '}
              <br />
              The website can have a unique and beautiful design to suite all your needs.
            </Typography>
          </CardContent>
        </Card>
      </li>
      <li>
        <Card sx={{ width: 300, height: 300 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              UI/ UX Design
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I can design the best looking UI/UX for your website.
              {' '}
              <br />
              I can do this using Adobe XD, Sketch, Figma, and Photoshop.
            </Typography>
          </CardContent>
        </Card>
      </li>
    </ul>
  </div>
);
export default Services;
