/* eslint-disable jsx-a11y/anchor-is-valid */
import './HomeInfo.css'
import {  useState } from 'react'
import { Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { products } from '../../data/products';
import { motion } from 'framer-motion'
import HelpIcon from '@mui/icons-material/Help';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LockIcon from '@mui/icons-material/Lock';
import RefreshIcon from '@mui/icons-material/Refresh';
import Grid from '@mui/material/Grid';
import FigurePoster from '../FigurePoster/FigurePoster';
import PreviewIcon from '@mui/icons-material/Preview';
import { Link } from "react-router-dom";



function HomeInfo() {

    const CustomToolTip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#d0d2d4',
            color: '#141414',
            width: '200px',
            padding: '10px',
            fontSize: 15,
            fontFamily: 'Work Sans, sans-serif',
        },
    }));


    // Tabs
    const [tabValue, setTabValue] = useState(1)

    const toggleTab = (index) => {
        setTabValue(index)
    }

    //animation Grid
    const grid = {
        visible: {
            opacity: 1, y: 0, transition: {
                ease: "easeOut",
                duration: 0.5
            }
        },
        hidden: {
            opacity: 0, y: "5vw", transition: {
                ease: "easeOut",
                duration: 0.5
            }
        }
    }

    // =========================================================


    return (
        <div className="home-info">

            {/* ===================== Service ========================== */}
            <div className="service-warp">
                <div className="container">
                    <div className="item">
                        <div className="item-icon">
                            <LocalOfferIcon className="main-icon" />
                        </div>
                        <div className="item-text">
                            <h3>Gi?? T???t Nh???t
                                <CustomToolTip placement="top-end" title="Gi?? c??? c???nh tr???nh, b???o ?????m ph?? h???p v???i nhu c???u c???a b???n.">
                                    <HelpIcon className="help-icon" />
                                </CustomToolTip>
                            </h3>
                            <p>Cho v?? kh??ng ??au</p>
                        </div>

                    </div>

                    <div className="item">
                        <div className="item-icon">
                            <LocalShippingIcon className="main-icon" />
                        </div>
                        <div className="item-text">
                            <h3>Giao H??ng Mi???n Ph??
                                <CustomToolTip placement="top-end" title="Mi???n ph?? giao h??ng ?????n t???n c??ng ng??? ng??ch nh?? b???n.">
                                    <HelpIcon className="help-icon" />
                                </CustomToolTip>
                            </h3>
                            <p>Ph???m vi to??n qu???c </p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-icon">
                            <RefreshIcon className="main-icon" />
                        </div>
                        <div className="item-text">
                            <h3>Ho??n Tr??? Mi???n Ph??
                                <CustomToolTip placement="top-end" title="Mi???n ph?? ?????i tr??? n???u s???n ph???m b??? l???i.">
                                    <HelpIcon className="help-icon" />
                                </CustomToolTip>
                            </h3>
                            <p>Trong 30 ng??y </p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-icon">
                            <LockIcon className="main-icon" />
                        </div>
                        <div className="item-text">
                            <h3>An To??n B???o M???t
                                <CustomToolTip placement="top-end" title="Th??ng tin kh??ch h??ng lu??n ???????c quan t??m v?? b???o m???t k?? c??ng.">
                                    <HelpIcon className="help-icon" />
                                </CustomToolTip>
                            </h3>
                            <p>Tho???i m??i mua s???m </p>
                        </div>
                    </div>

                </div>
            </div>


            {/* ===================== Best Seller ========================== */}
            <div className="best-seller">
                <div className="container">
                    <div className="heading">
                        <h1>M?? h??nh b??n ch???y</h1>
                        <div className="heading-left">
                            <a onClick={() => toggleTab(1)}><p className={tabValue === 1 ? "active" : ""}>Naruto</p></a>
                            <a onClick={() => toggleTab(2)}><p className={tabValue === 2 ? "active" : ""}>One Piece</p></a>
                            <a onClick={() => toggleTab(3)}><p className={tabValue === 3 ? "active" : ""}>Jujutsu Kaisen</p></a>
                            <a onClick={() => toggleTab(4)}><p className={tabValue === 4 ? "active" : ""}>My Hero Academia</p></a>
                            <Link to="/products"><p>Xem th??m</p></Link>
                        </div>
                    </div>

                    {tabValue === 1 && (
                        <motion.div
                            variants={grid}
                            initial="hidden"
                            animate="visible"
                        >
                            <Grid container spacing={3} className="product-grid-container">
                                {products.slice(43, 51).map((product, index) => (
                                    <Grid
                                        sm={6}
                                        md={3}
                                        xs={12}
                                        item key={index}
                                        className="product-grid-item"
                                    >
                                        <FigurePoster
                                            key={index}
                                            ImgSrc={product.thumbImg}
                                            name={product.name}
                                            price={product.price}
                                            status={product.status}
                                            id={product.id}
                                            stock={product.stock}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    )}

                    {tabValue === 2 && (
                        <motion.div
                            variants={grid}
                            initial="hidden"
                            animate="visible"
                        >
                            <Grid container spacing={3} className="product-grid-container">
                                {products.slice(54, 62).map((product, index) => (
                                    <Grid
                                        sm={6}
                                        md={3}
                                        xs={12}
                                        item key={index}
                                        className="product-grid-item"
                                    >
                                        <FigurePoster
                                            key={index}
                                            ImgSrc={product.thumbImg}
                                            name={product.name}
                                            price={product.price}
                                            status={product.status}
                                            id={product.id}
                                            stock={product.stock}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    )}

                    {tabValue === 3 && (
                        <motion.div
                            variants={grid}
                            initial="hidden"
                            animate="visible"
                        >
                            <Grid container spacing={3} className="product-grid-container">
                                {products.slice(31, 39).map((product, index) => (
                                    <Grid
                                        sm={6}
                                        md={3}
                                        xs={12}
                                        item key={index}
                                        className="product-grid-item"
                                    >
                                        <FigurePoster
                                            key={index}
                                            ImgSrc={product.thumbImg}
                                            name={product.name}
                                            price={product.price}
                                            status={product.status}
                                            id={product.id}
                                            stock={product.stock}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    )}

                    {tabValue === 4 && (
                        <motion.div
                            variants={grid}
                            initial="hidden"
                            animate="visible"
                        >
                            <Grid container spacing={3} className="product-grid-container">
                                {products.slice(0, 8).map((product, index) => (
                                    <Grid
                                        sm={6}
                                        md={3}
                                        xs={12}
                                        item key={index}
                                        className="product-grid-item"
                                    >
                                        <FigurePoster
                                            key={index}
                                            ImgSrc={product.thumbImg}
                                            name={product.name}
                                            price={product.price}
                                            status={product.status}
                                            id={product.id}
                                            stock={product.stock}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    )}
                </div>

            </div>

            {/* ===================== Collection ========================== */}
            <div className="collection">
                <div className="container">
                    <div className="heading">
                        <h1>B??? S??u T???p ?????c ????o</h1>
                    </div>

                    <div className="content">

                        <div className="collection1">
                            <img alt='' src={require('../../data/productImage/Marvel DC/Marvel/moon-knight_marvel_gallery_624dc18ca6187.jpg')}></img>
                            <div className="check-collection">
                                <div className="btn"><span><PreviewIcon className="preview-icon" /></span>Xem Chi Ti???t</div>
                            </div>
                        </div>

                        <div className="collection2">
                            <img alt='' src={require('../../data/productImage/Marvel DC/DC Comics/batman-and-bat-signal_dc-comics.jpg')}></img>
                            <div className="check-collection">
                                <div className="btn"><span><PreviewIcon className="preview-icon" /></span>Xem Chi Ti???t</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ===================== News ========================== */}
            <div className="news">
                <div className="container">
                    <div className="heading">
                        <h1>Tin T???c</h1>
                        <div className="heading-left">
                            <Link to="/news"><p>Xem th??m</p></Link>
                        </div>
                    </div>

                    <div className="content">

                        <div className="news-item">
                            <div className="thumbnail">
                                <img alt='' src={require('../../data/News/news1-title (2).jpg')}></img>
                            </div>
                            <div className="info">
                                <div className="top-info">
                                    <p>Th??ng b??o  </p><span style={{ marginLeft: '5px' }}>| 23-04-2022</span>
                                </div>
                                <div className="title">
                                    <h3>M???ng ng??y khai tr????ng, FIGIMAN gi???m 50% t???t c??? m?? h??nh khi mua t???i c???a h??ng!</h3>
                                </div>

                            </div>
                        </div>

                        <div className="news-item">
                            <div className="thumbnail">
                                <img alt="" src={require('../../data/News/news2-title.jpg')}></img>
                            </div>
                            <div className="info">
                                <div className="top-info">
                                    <p>M???o v???t </p><span style={{ marginLeft: '5px' }}> | 23-04-2022</span>
                                </div>
                                <div className="title">
                                    <h3>C??c c??ch b???o qu???n m?? h??nh ????? tr??nh b??? h?? h???ng t???t nh???t!</h3>
                                </div>

                            </div>
                        </div>

                        <div className="news-item">
                            <div className="thumbnail">
                                <img alt="" src={require('../../data/News/news3-title.jpg')}></img>
                            </div>
                            <div className="info">
                                <div className="top-info">
                                    <p>M???o v???t </p><span style={{ marginLeft: '5px' }}>|  23-04-2022</span>
                                </div>
                                <div className="title">
                                    <h3>Nh???ng ??i???u th?? v??? n??o ??ang ch??? ????n b???n t???i FIGIMAN?</h3>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="end"></div>

        </div>
    )
}

export default HomeInfo