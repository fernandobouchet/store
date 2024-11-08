import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-divider mt-10 p-2">
      <div className="container mx-auto px-4 text-center text-default-500">
        <p>&copy; 2024 TechStore. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <Link href="#" className="hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-foreground">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
