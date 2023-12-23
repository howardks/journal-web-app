export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <p>&copy; {currentYear} Kaylie Howard</p>
        </div>
    );
}