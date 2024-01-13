export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div class="py-3">
            <footer class="py-3 my-3">
                <p class="py-3 text-center border-top">&copy; {currentYear} Kaylie Howard</p>
            </footer>
        </div>
    );
}