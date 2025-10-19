import { Link } from 'react-router-dom'
import { Layout, Space, Badge, Button, Dropdown, Menu, Input, Select } from 'antd'
import { BellOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons'
import './Header.scss'

const { Header: AntHeader } = Layout

// Social media links data
const socialLinks = [
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@medprovn',
    icon: <svg width="16" height="16" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>,
    showDivider: false
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/@medprovn',
    icon: <svg width="16" height="16" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>,
    showDivider: true
  },
  {
    name: 'Zalo',
    url: 'https://zalo.me/medprovn',
    icon: <svg width="18" height="18" viewBox="0 0 50 50"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 15.580078 6 C 12.00899 9.7156859 10 14.518083 10 19.5 C 10 24.66 12.110156 29.599844 15.910156 33.339844 C 16.030156 33.549844 16.129922 34.579531 15.669922 35.769531 C 15.379922 36.519531 14.799687 37.499141 13.679688 37.869141 C 13.249688 38.009141 12.97 38.430859 13 38.880859 C 13.03 39.330859 13.360781 39.710781 13.800781 39.800781 C 16.670781 40.370781 18.529297 39.510078 20.029297 38.830078 C 21.379297 38.210078 22.270625 37.789609 23.640625 38.349609 C 26.440625 39.439609 29.42 40 32.5 40 C 36.593685 40 40.531459 39.000731 44 37.113281 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z"/></svg>,
    showDivider: true
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@medprovn',
    icon: <svg width="16" height="16" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>,
    showDivider: true
  }
]

// Navigation menus data
const facilityMenu = (
    <Menu>
        <Menu.Item key="hospital">Bệnh viện</Menu.Item>
        <Menu.Item key="clinic">Phòng khám</Menu.Item>
        <Menu.Item key="pharmacy">Nhà thuốc</Menu.Item>
        <Menu.Item key="lab">Xét nghiệm</Menu.Item>
    </Menu>
)

const serviceMenu = (
    <Menu>
        <Menu.Item key="checkup">Khám tổng quát</Menu.Item>
        <Menu.Item key="specialist">Khám chuyên khoa</Menu.Item>
        <Menu.Item key="vaccine">Tiêm chủng</Menu.Item>
        <Menu.Item key="homecare">Chăm sóc tại nhà</Menu.Item>
    </Menu>
)

const newsMenu = (
    <Menu>
        <Menu.Item key="health-news">Tin tức sức khỏe</Menu.Item>
        <Menu.Item key="medical-news">Tin y khoa</Menu.Item>
        <Menu.Item key="company-news">Tin công ty</Menu.Item>
    </Menu>
)

const guideMenu = (
    <Menu>
        <Menu.Item key="how-to-book">Hướng dẫn đặt khám</Menu.Item>
        <Menu.Item key="how-to-pay">Hướng dẫn thanh toán</Menu.Item>
        <Menu.Item key="faq">Câu hỏi thường gặp</Menu.Item>
    </Menu>
)

const cooperationMenu = (
    <Menu>
        <Menu.Item key="partner">Đối tác</Menu.Item>
        <Menu.Item key="hospital-cooperation">Hợp tác bệnh viện</Menu.Item>
        <Menu.Item key="business">Hợp tác doanh nghiệp</Menu.Item>
    </Menu>
)

const languageOptions = [
    { value: 'vi', label: '🇻🇳 Tiếng Việt' },
    { value: 'en', label: '🇺🇸 English' }
]

// Adjust the dropdown overlay to ensure it appears above other elements and covers the background
const userDropdownMenu = (
    <div className="mdbdropdownProfile mdbdropdownMenu" style={{ zIndex: 1050, backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <ul>
            <li className="item_user">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="icon">
                        <svg width="35" height="35" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Huge-icon/user/bulk/user-circle">
                                <g id="user circle">
                                    <path id="Vector" opacity="0.4" d="M31.1666 17C31.1666 21.2037 29.2784 24.9731 26.2916 27.5307C23.8043 29.6607 20.555 30.9502 16.9999 30.9502C13.4448 30.9502 10.1956 29.6607 7.70824 27.5307C4.72145 24.9731 2.83325 21.2037 2.83325 17C2.83325 9.29552 9.17588 3.0498 16.9999 3.0498C24.824 3.0498 31.1666 9.29552 31.1666 17Z" fill="url(#paint0_linear_1587_48173)"/>
                                    <path d="M26.2915 27.5307C24.8841 23.8241 21.2549 21.1851 16.9998 21.1851C12.7447 21.1851 9.11549 23.8241 7.70813 27.5307C10.1955 29.6607 13.4447 30.9502 16.9998 30.9502C20.5549 30.9502 23.8041 29.6607 26.2915 27.5307Z" fill="url(#paint1_linear_1587_48173)"/>
                                    <ellipse cx="4.25" cy="4.18506" rx="4.25" ry="4.18506" transform="matrix(1 0 0 -1 12.7499 18.3945)" fill="white"/>
                                </g>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1587_48173" x1="12.6712" y1="25.0911" x2="37.7233" y2="22.2511" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00B5F1"/>
                                    <stop offset="1" stopColor="#00E0FF"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_1587_48173" x1="14.1607" y1="28.8995" x2="30.0845" y2="25.5167" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00B5F1"/>
                                    <stop offset="1" stopColor="#00E0FF"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <div className="info" style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
                        <span>Xin chào,</span>
                        <div className="info_name" style={{ marginLeft: '4px' }}>
                            <h4 style={{ margin: 0 }}>Phạm Anh Phi</h4>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item_information">
                <div>
                    <div className="itemInfo">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#003553" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                        <g><path fill="none" d="M0 0H24V24H0z"/><path d="M20 2c.552 0 1 .448 1 1v18c0 .552-.448 1-1 1H6c-.552 0-1-.448-1-1v-2H3v-2h2v-2H3v-2h2v-2H3V9h2V7H3V5h2V3c0-.552.448-1 1-1h14zm-1 2H7v16h12V4zm-5 4v3h3v2h-3.001L14 16h-2l-.001-3H9v-2h3V8h2z"/></g>
                    </svg>
                        <span>Hồ sơ bệnh nhân</span>
                    </div>
                </div>
            </li>
            <li className="item_information">
                <div>
                    <div className="itemInfo">
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" color="#003553" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"/>
                        <path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"/>
                        <path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor"/>
                        <path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor"/>
                    </svg>
                        <span>Phiếu khám bệnh</span>
                    </div>
                </div>
            </li>
            <li className="item_information">
                <div>
                    <div className="itemInfo">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="#003553" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"/>
                    </svg>
                        <span>Thông báo</span>
                    </div>
                </div>
            </li>
            <li className="item_information logOut logOutHover">
                <div>
                    <span className="icon">
                        <svg width="19" height="19" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.25 3.25C4.62665 3.25 2.5 5.37665 2.5 8V16C2.5 18.6234 4.62665 20.75 7.25 20.75H14.5C17.1234 20.75 19.25 18.6234 19.25 16C19.25 15.5858 18.9142 15.25 18.5 15.25C18.0858 15.25 17.75 15.5858 17.75 16C17.75 17.7949 16.2949 19.25 14.5 19.25H9.96412C10.7616 18.4003 11.25 17.2572 11.25 16V8C11.25 6.74279 10.7616 5.59965 9.96412 4.75H14.5C16.2949 4.75 17.75 6.20507 17.75 8C17.75 8.41421 18.0858 8.75 18.5 8.75C18.9142 8.75 19.25 8.41421 19.25 8C19.25 5.37665 17.1234 3.25 14.5 3.25H7.25ZM19.6464 14.5303C19.3536 14.2374 19.3536 13.7626 19.6464 13.4697L20.3661 12.75H14.25C13.8358 12.75 13.5 12.4142 13.5 12C13.5 11.5858 13.8358 11.25 14.25 11.25H20.3661L19.6464 10.5303C19.3536 10.2374 19.3536 9.76256 19.6464 9.46967C19.9393 9.17678 20.4142 9.17678 20.7071 9.46967L22 10.7626C22.6834 11.446 22.6834 12.554 22 13.2374L20.7071 14.5303C20.4142 14.8232 19.9393 14.8232 19.6464 14.5303Z" fill="#e74c3c"/>
                        </svg>
                    </span>
                    <span>Đăng xuất</span>
                </div>
            </li>
            <div className="version">Cập nhật mới nhất: 17/10/2025</div>
        </ul>
    </div>
)

function Header() {
    return (
        <AntHeader className="custom-header">
            <div className="header-wrapper">
                {/* Left Side - Logo */}
                <div className="header-left">
                    <div className="header-logo">
                        <Link to="/">
                            <span>MedCare</span>
                        </Link>
                    </div>
                </div>

                {/* Right Side - All Content */}
                <div className="header-right">
                    {/* Top Section: Social + Notification + User + Language */}
                    <div className="header-top-content">
                        {/* Social Networks */}
                        <Space className="social-links" size={0}>
                            {socialLinks.map((link) => (
                                <div key={link.name} className={`social-item ${link.showDivider ? 'with-divider' : ''}`}>
                                    <Button 
                                        type="text" 
                                        href={link.url}
                                        target="_blank"
                                        className="social-link"
                                        icon={link.icon}
                                    >
                                        {link.name}
                                    </Button>
                                </div>
                            ))}
                        </Space>

                        {/* Right group: Notification, Download, User, Language */}
                        <div className="header-top-right">
                            <div className="notification-area">
                                <Badge count="99+" size="small" offset={[-2, -2]}>
                                    <Button 
                                        type="text" 
                                        shape="circle" 
                                        icon={<BellOutlined style={{ color: '#00b5f1', fontSize: '20px' }} />}
                                        className="notification-btn"
                                    />
                                </Badge>
                                <div>
                                    <Button className='btnDownloadApp' type='primary'>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-label="Icon Phone" height="17" width="17" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></svg>
                                        <span>Tải ứng dụng</span>
                                    </Button>
                                </div>
                                <div className="dropInfo">
                                    <Dropdown 
                                        overlay={userDropdownMenu} 
                                        trigger={['click']} 
                                        placement="bottomRight"
                                        overlayClassName="user-dropdown-overlay"
                                    >
                                        <Button className='btnUserName' type='default'>
                                            Phạm Anh Phi
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="language-area top-language">
                                <Select
                                    defaultValue="vi"
                                    className="language-selector"
                                    options={languageOptions}
                                    bordered={false}
                                    suffixIcon={<DownOutlined />}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Search + Navigation Menu */}
                    <div className="header-bottom-content">
                        <div className="nav-left">
                            <Input.Search
                                placeholder="Tìm kiếm..."
                                className="header-search"
                                style={{ width: 200 }}
                                enterButton={<SearchOutlined />}
                            />
                        </div>
                        <div className="nav-right">
                            <Space size="small">
                                <Dropdown overlay={facilityMenu} trigger={['hover']}>
                                    <Button type="text" className="nav-item">
                                        Cơ sở y tế <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={serviceMenu} trigger={['hover']}>
                                    <Button type="text" className="nav-item">
                                        Dịch vụ y tế <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Button type="text" className="nav-item">
                                    Khám sức khỏe doanh nghiệp
                                </Button>
                                <Dropdown overlay={newsMenu} trigger={['hover']}>
                                    <Button type="text" className="nav-item">
                                        Tin tức <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={guideMenu} trigger={['hover']}>
                                    <Button type="text" className="nav-item">
                                        Hướng dẫn <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={cooperationMenu} trigger={['hover']}>
                                    <Button type="text" className="nav-item">
                                        Liên hệ hợp tác <DownOutlined />
                                    </Button>
                                </Dropdown>
                            </Space>
                        </div>
                    </div>
                </div>
            </div>
        </AntHeader>
    )
}

export default Header;