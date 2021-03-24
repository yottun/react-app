class Header extends React.Component {
    render() {
        return (
            <div class="logo">
                <nav>
                    <ul class="gnav">
                        <li><a href="/">トップページ</a></li>
                        <li><a href="/module.php">モジュール</a></li>
                        <li><a href="/company.php">会社概要</a></li>
                        <li><a href="/news.php">お知らせ</a></li>
                        <li><a href="/policy.php">プライバシーポリシー</a></li>
                        <li><a href="/contact.php">お問い合わせ</a></li>
                        <li><a href="/contact.php">印刷</a></li>
                    </ul>
                    <ul class="sns">
                        <li><a target="_blank" href="https://twitter.com/eat_tas"></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/eat__tas/"></a></li>
                        <li><a target="_blank" href="#"></a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}