import React, {Component, Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import ChartJsCircular from './Examples/Circular';
import ChartJsLinesBars from './Examples/LinesBars';

const tabsContent = [
    {
        title: 'Employability Monitor',
        content: <ChartJsCircular/>
    },
    {
        title: 'Health Monitor',
        content: <ChartJsLinesBars/>
    },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class ChartJSExamples extends Component {
    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Your Personal Dashboard"
                    subheading="Your Information here are used anonymously to build predicative model for national health and labour skills tracking. We promised they are not used unfairly to discriminate you for job screening or health insurance screening."
                    icon="pe-7s-bandaid icon-gradient bg-amy-crisp"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}