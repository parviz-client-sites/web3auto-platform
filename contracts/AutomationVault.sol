// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AutomationVault is ReentrancyGuard, Ownable {
    
    struct BotStrategy {
        address owner;
        string name;
        uint256 totalInvested;
        uint256 totalProfit;
        bool isActive;
        uint256 createdAt;
    }
    
    mapping(address => BotStrategy[]) public userStrategies;
    mapping(uint256 => BotStrategy) public strategies;
    uint256 public strategyCount;
    
    IERC20 public paymentToken;
    uint256 public platformFee = 50; // 0.5% fee (in basis points)
    
    event StrategyCreated(address indexed user, uint256 strategyId, string name);
    event FundsDeposited(uint256 indexed strategyId, uint256 amount);
    event ProfitHarvested(uint256 indexed strategyId, uint256 profit);
    event FeeCollected(uint256 amount);
    
    constructor(address _paymentToken) {
        paymentToken = IERC20(_paymentToken);
    }
    
    function createStrategy(string memory name) external returns (uint256) {
        require(bytes(name).length > 0, "Name cannot be empty");
        
        BotStrategy memory newStrategy = BotStrategy({
            owner: msg.sender,
            name: name,
            totalInvested: 0,
            totalProfit: 0,
            isActive: true,
            createdAt: block.timestamp
        });
        
        strategies[strategyCount] = newStrategy;
        userStrategies[msg.sender].push(newStrategy);
        
        emit StrategyCreated(msg.sender, strategyCount, name);
        return strategyCount++;
    }
    
    function deposit(uint256 strategyId, uint256 amount) external nonReentrant {
        require(strategyId < strategyCount, "Invalid strategy ID");
        require(strategies[strategyId].isActive, "Strategy is not active");
        require(strategies[strategyId].owner == msg.sender, "Not strategy owner");
        
        paymentToken.transferFrom(msg.sender, address(this), amount);
        strategies[strategyId].totalInvested += amount;
        
        emit FundsDeposited(strategyId, amount);
    }
    
    function harvestProfit(uint256 strategyId, uint256 profitAmount) external onlyOwner {
        require(strategyId < strategyCount, "Invalid strategy ID");
        
        uint256 fee = (profitAmount * platformFee) / 10000;
        uint256 userProfit = profitAmount - fee;
        
        strategies[strategyId].totalProfit += userProfit;
        
        paymentToken.transfer(strategies[strategyId].owner, userProfit);
        paymentToken.transfer(owner(), fee);
        
        emit ProfitHarvested(strategyId, userProfit);
        emit FeeCollected(fee);
    }
    
    function updatePlatformFee(uint256 newFee) external onlyOwner {
        require(newFee <= 100, "Fee too high");
        platformFee = newFee;
    }
}