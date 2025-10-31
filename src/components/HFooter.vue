<template>
    <div class="in-footer" v-observe>
        <h2 class="footer-h2">Stay Connected</h2>
        <p class="footer-p">Don't miss out on crucial updates, speaker announcements, networking tips, and
            behind-the-scenes looks at Rio! <br />
            Follow us across all platforms to engage with fellow attendees, industry leaders, and the IES community
            before, during, and after the Congress.</p>
        <div class="footer-connect">
            <button class="btn-footer"><i class="fa-instagram"></i> Instagram</button>
            <button class="btn-footer"><i class="fa-ieee"></i> IEEE Collabratec</button>
            <button class="btn-footer"><i class="fa-facebook"></i> Facebook</button>
        </div>
    </div>
</template>

<style scoped>
.in-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    gap: 2rem;

    min-height: 540px;

    background-color: var(--secondary-color-dark);
    color: var(--neutral-color-light);
}

.footer-h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
}

.footer-p {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    max-width: 1120px;
    line-height: 1.2;
}

.footer-connect {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.btn-footer {
    background-color: var(--secondary-color);
    color: var(--neutral-color-light);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-footer i {
    display: inline-block;
    width: 32px;
    height: 32px;
}

.fa-instagram {
    background: url('../../public/images/M1.png') no-repeat center;
    background-size: cover;
}

.fa-ieee {
    background: url('../../public/images/M2.png') no-repeat center;
    background-size: cover;
}

.fa-facebook {
    background: url('../../public/images/M3.png') no-repeat center;
    background-size: cover;
}
</style>