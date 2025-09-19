class Entity {
    // Private Variables
    #healthStat;
    #strengthStat;
    #wisdomStat;
    #manaStat;
    #defenseStat;
    #magicDefenseStat;
    #speedStat;
    #evasionStat;

    constructor({healthStat, strengthStat, wisdomStat, manaStat, defenseStat, magicDefenseStat, speedStat, evasionStat}) {
        this.#healthStat = healthStat;
        this.#strengthStat = strengthStat;
        this.#wisdomStat = wisdomStat;
        this.#manaStat = manaStat;
        this.#defenseStat = defenseStat;
        this.#magicDefenseStat = magicDefenseStat;
        this.#speedStat = speedStat;
        this.#evasionStat = evasionStat;
    }
    
    /**
     * Decreases this.healthStat based on the attacker's strengthStat
     * @param {int} strengthStat - strenghtStat of attacker
     */
    takePhysicalDamage({strengthStat}) {
        if (strengthStat <= this.#defenseStat) {
            this.#healthStat--;
        } else {
            this.#healthStat -= Math.floor(strengthStat - (0.5 * this.#defenseStat));
        }
    }

    /**
     * Decreases this.healthStat based on the attacker's wisdomStat
     * @param {int} wisdomStat - wisdomStat of attacker
     */
    takeMagicDamage({wisdomStat}) {
        if (wisdomStat <= this.#magicDefenseStat) {
            this.#healthStat--;
        } else {
            this.#healthStat -= Math.floor(wisdomStat - (0.5 * this.#magicDefenseStat));
        }
    }
    /**
     * Decreases this.healthStat based on the Attacker's strengthStat and wisdomStat
     * @param {int} strenghtStat - strengthStat of Attacker
     * @param {int} wisdomStat - wisdomStat of Attacker 
     */
    takeTrueDamage({strengthStat, wisdomStat}) {
        this.#healthStat -= (strengthStat + wisdomStat);
    }

   /**
    * Checks if the entity is dead
    * @returns {boolean} True if dead, False if alive
    */
   isDead() {
        return this.#healthStat <= 0;
   }



}