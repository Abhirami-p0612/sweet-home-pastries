import React from "react";
export default function Info() {
    const [count, setCount] = React.useState(0);
    const [shouldCount, setShouldCount] = React.useState(false);

    React.useEffect(() => {
        const target = document.getElementById("collection");

        if (!target) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldCount(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.25,
            }
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        if (!shouldCount) {
            return;
        }

        const timer = setInterval(() => {
            setCount(prev => {
                if (prev < 500) {
                    return prev + 5;
                }
                return prev;
            });
        }, 60);

        return () => clearInterval(timer);
    }, [shouldCount]);

return (
    <>
        <div className="info"
        >
                        <div className="info-container">
                            <h2>5 Cakes</h2>
                        </div>
                        <div className="info-container">
                            <h2>{count}+ Customers </h2>
                        </div>
                        <div className="info-container">
                            <h2> 5 ★ Rating  </h2>
                        </div>
        </div>
    </>
)
}
