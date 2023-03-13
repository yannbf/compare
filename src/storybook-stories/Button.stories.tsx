import { Button } from './Button';

export const meta: ReactMeta = {
  title: 'Example/Button',
  component: Button,
};

export const Primary: ReactStory = () => <Button primary label="Button" />;

export const Secondary: ReactStory = () => <Button label="Button" />;

export const Large: ReactStory = () => <Button size="large" label="Button" />;

export const Small: ReactStory = () => <Button size="small" label="Button" />;
