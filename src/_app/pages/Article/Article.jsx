import * as React from 'react';

import './Article.scss';

import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Text from '../../components/Text/Text';
import Delimetr from '../../components/Delimetr/Delimetr';
import Button from '../../components/Button/Button';

const Article = () => (
    <section className="container">
        <article className="article">
            <section className="article__head">
                <Title>
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                </Title>
                <Meta>
                    {'MARCH 2, 2016 | TRAVEL'}
                </Meta>
                <Delimetr />
            </section>
            <section>
                <Text modifier="note">
                    {'Nulla lacinia, sapien nec mollis pharetra, neque diam sodales ipsum, suscipit commodo magna quam id felis. Morbi pulvinar venenatis elementum. Etiam est ex, accumsan eu pellentesque nec, maximus id sem. Nulla facilisi. Donec malesuada aliquet diam, in porta ex condimentum nec.'}
                </Text>
                <Title modifier="subtitle">
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                </Title>
                <Text>
                    {'In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci viverra laoreet. Aliquam condimentum neque non cursus dapibus. Aliquam aliquet quam dui, nec facilisis velit ultricies at. Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar. Quisque fringilla augue ac massa interdum laoreet.'}
                </Text>
                <Text>
                    {'In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci viverra laoreet. Aliquam condimentum neque non cursus dapibus. Aliquam aliquet quam dui, nec facilisis velit ultricies at. Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar. Quisque fringilla augue ac massa interdum laoreet.'}
                </Text>
                <Text>
                    {'In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci viverra laoreet. Aliquam condimentum neque non cursus dapibus. Aliquam aliquet quam dui, nec facilisis velit ultricies at. Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar. Quisque fringilla augue ac massa interdum laoreet.'}
                </Text>
                <Title modifier="subtitle">
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                </Title>
                <Text>
                    {'In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci viverra laoreet. Aliquam condimentum neque non cursus dapibus. Aliquam aliquet quam dui, nec facilisis velit ultricies at. Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar. Quisque fringilla augue ac massa interdum laoreet.'}
                </Text>
                <Text>
                    {'In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci viverra laoreet. Aliquam condimentum neque non cursus dapibus. Aliquam aliquet quam dui, nec facilisis velit ultricies at. Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar. Quisque fringilla augue ac massa interdum laoreet.'}
                </Text>
            </section>
            <section className="article__footer">
                <Button>View all posts</Button>
            </section>
        </article>
    </section>
);

export default Article;
