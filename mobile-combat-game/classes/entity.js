class Entity {
    // Private Variables
    #healthStat;
    #strengthStat;
    #wisdomStat;
    #manaStat;
    #defenseStat;
    #magicDefenseStat;

    constructor({healthStat, strengthStat, wisdomStat, manaStat, defenseStat, magicDefenseStat}) {
        this.#healthStat = healthStat;
        this.#strengthStat = strengthStat;
        this.#wisdomStat = wisdomStat;
        this.#manaStat = manaStat;
        this.#defenseStat = defenseStat;
        this.#magicDefenseStat = magicDefenseStat;
    }
    
    /**
     * Decreases this.healthStat based on the attacker's strengthStat
     * @param {int} strengthStat - strenghtStat of attacker
     * @returns {int} modified health stat
     */
    takePhysicalDamage({strengthStat}) {
        if (strengthStat <= this.#defenseStat) {
            this.#healthStat--;
        } else {
            this.#healthStat -= Math.floor(strengthStat - (0.5 * this.#defenseStat));
        }
        return this.#healthStat;
    }

    /**
     * Decreases this.healthStat based on the attacker's wisdomStat
     * @param {int} wisdomStat - wisdomStat of attacker
     * @returns {int} modified health stat
     */
    takeMagicDamage({wisdomStat}) {
        if (wisdomStat <= this.#magicDefenseStat) {
            this.#healthStat--;
        } else {
            this.#healthStat -= Math.floor(wisdomStat - (0.5 * this.#magicDefenseStat));
        }
        return this.#healthStat;
    }
    /**
     * Decreases this.healthStat based on the Attacker's strengthStat and wisdomStat
     * @param {int} strenghtStat - strengthStat of Attacker
     * @param {int} wisdomStat - wisdomStat of Attacker 
     * @returns {int} modified health stat
     */
    takeTrueDamage({strengthStat, wisdomStat}) {
        this.#healthStat -= (strengthStat + wisdomStat);
        return this.#healthStat;
    }

   /**
    * Checks if the entity is dead
    * @returns {boolean} True if dead, False if alive
    */
   isDead() {
        return this.#healthStat <= 0;
   }

   healHP(numToIncreaseHealthBy) {
        this.#healthStat += numToIncreaseHealthBy;
        return this.#healthStat
   }

   /**
    * Decrements this.manaStat
    * @returns {int} modified mana stat
    */
   decrementMana() {
        this.#manaStat--;
        return this.#manaStat
   }

   /**
    * @returns {object} Map of entity stats
    */
   getStats() {
        return {
            healthStat : this.#healthStat,
            strengthStat : this.#strengthStat,
            wisdomStat : this.#wisdomStat,
            manaStat : this.#manaStat,
            defenseStat : this.#defenseStat,
            magicDefenseStat : this.#magicDefenseStat
        };
   }

}

export default Entity