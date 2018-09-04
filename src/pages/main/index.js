import React, {Component,Fragment} from 'react';
import {connect} from 'dva';
import classnames from 'classnames'
import numeral from 'numeral';
import DocumentTitle from 'react-document-title';
import {
  ActivityIndicator,
} from 'antd-mobile';
import styles from './style.less'

@connect(({main, loading}) => {
	return {
    main,
		loading: loading.effects['main/getData'],
	}
})
export default class Main extends Component {
	state = {};

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render() {
	  const { main:{ bannerList, goodsTypeList, goodsPriceList }, loading, location:{ pathname } } = this.props;
		return (
			<DocumentTitle title="首页">
        <Fragment>
          <ActivityIndicator toast text="正在加载" animating={loading}/>
          <div>
            hello word
          </div>
        </Fragment>
			</DocumentTitle>
		);
	}
}
